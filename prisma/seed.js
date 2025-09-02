import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()
const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))

async function main() {
  for (const p of products) {
    try {
      // 1️⃣ Mevcut olmayan veya null resimlerde placeholder kullan
      const imgPath = path.join(process.cwd(), 'public', p.img || '')
      const img = fs.existsSync(imgPath) ? p.img : '/img/products/coming-soon.jpg'

      // 2️⃣ Category ekle veya bul
      let category = null
      if (p.category) {
        category = await prisma.category.upsert({
          where: { name: p.category },
          update: {},
          create: { name: p.category }
        })
      }

      // 3️⃣ SubCategory ekle veya bul (farklı sektörlerde aynı alt kategori olabilir)
      let subCategory = null
      if (p.productSubCategory && category) {
        subCategory = await prisma.subCategory.findFirst({
          where: { name: p.productSubCategory, categoryId: category.id }
        })

        if (!subCategory) {
          subCategory = await prisma.subCategory.create({
            data: { name: p.productSubCategory, categoryId: category.id }
          })
        }
      }

      // 4️⃣ Product ekle veya güncelle
      await prisma.product.upsert({
        where: { subtitle: p.subtitle },
        update: {
          title: p.title,
          description: p.description,
          productDetail: p.productDetail,
          price: p.price,
          img,
          imgProductDetail: p.imgProductDetail,
          link: p.link,
          isDeleted: p.isDeleted,
          categoryId: category?.id || null,
          subCategoryId: subCategory?.id || null
        },
        create: {
          title: p.title,
          subtitle: p.subtitle,
          description: p.description,
          productDetail: p.productDetail,
          price: p.price,
          img,
          imgProductDetail: p.imgProductDetail,
          link: p.link,
          isDeleted: p.isDeleted,
          categoryId: category?.id || null,
          subCategoryId: subCategory?.id || null
        }
      })

      console.log(`Seeded: ${p.subtitle}`)
    } catch (err) {
      console.error(`Hata: ${p.subtitle}`, err.message)
    }
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
