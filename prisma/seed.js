import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()
const products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))
const slides = JSON.parse(fs.readFileSync('./data/slides.json', 'utf-8'))
const catalogs = JSON.parse(fs.readFileSync('./data/catalogs.json', 'utf-8'))
const courses = JSON.parse(fs.readFileSync('./data/courses.json', 'utf-8'))
const services = JSON.parse(fs.readFileSync('./data/services.json', 'utf-8'))
const softwares = JSON.parse(fs.readFileSync('./data/softwares.json', 'utf-8'))
const processStages = JSON.parse(fs.readFileSync('./data/processStages.json', 'utf-8'))
const reasonsForKarvise = JSON.parse(fs.readFileSync('./data/reasonsForKarvise.json', 'utf-8'))
const questions = JSON.parse(fs.readFileSync('./data/questions.json', 'utf-8'))
const exportServices = JSON.parse(fs.readFileSync('./data/exportServices.json', 'utf-8'))

async function main() {
  // =======================
  // 📌 PRODUCTS
  // =======================
  for (const p of products) {
    try {
      const imgPath = path.join(process.cwd(), 'public', p.img || '')
      const img = fs.existsSync(imgPath) ? p.img : '/img/products/coming-soon.jpg'

      let category = null
      if (p.category) {
        category = await prisma.category.upsert({
          where: { name: p.category },
          update: {},
          create: { name: p.category }
        })
      }

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
  
  // =======================
  // 📌 SLIDES
  // =======================
  await prisma.slide.deleteMany()
  for (const s of slides) {
    await prisma.slide.create({ data: s })
    console.log(`✅ Seeded Slide: ${s.title}`)
  }

  // =======================
  // 📌 CATALOGS
  // =======================
  await prisma.catalog.deleteMany()
  for (const c of catalogs) {
    await prisma.catalog.create({ data: c })
    console.log(`✅ Seeded Catalog: ${c.title}`)
  }

  // =======================
  // 📌 COURSES
  // =======================
  await prisma.course.deleteMany()
  for (const c of courses) {
    await prisma.course.create({ data: c })
    console.log(`✅ Seeded Course: ${c.title}`)
  }

  // =======================
  // 📌 SERVİCES
  // =======================
  for (const s of services) {
    try {
      await prisma.service.upsert({
        where: { title: s.title },
        update: {
          description: s.description,
          status: s.status
        },
        create: {
          title: s.title,
          description: s.description,
          status: s.status
        }
      })
      console.log(`✅ Seeded Service: ${s.title}`)
    } catch (err) {
      console.error(`❌ Error seeding service: ${s.title}`, err.message)
    }
  }
  
  // =======================
  // 📌 SOFTWARES
  // =======================
  for (const s of softwares) {
    try {
      await prisma.software.upsert({
        where: { slug: s.slug },
        update: {
          title: s.title,
          description: s.description,
          logo: s.logo,
          status: s.status,
          ctaLink: s.ctaLink,
          details: s.details
        },
        create: {
          title: s.title,
          slug: s.slug,
          description: s.description,
          logo: s.logo,
          status: s.status,
          ctaLink: s.ctaLink,
          details: s.details
        }
      })
      console.log(`✅ Seeded Software: ${s.title}`)
    } catch (err) {
      console.error(`❌ Error seeding software: ${s.title}`, err.message)
    }
  }

  // =======================
  // 📌 PROCESS STAGES
  // =======================
  await prisma.ProcessStage.deleteMany()
  for (const c of processStages) {
    await prisma.ProcessStage.create({ data: c })
    console.log(`✅ Seeded ProcessStage: ${c.title}`)
  }

  // =======================
  // 📌 REASON FOR KARVİSE
  // =======================
  await prisma.ReasonForKarvise.deleteMany()
  for (const c of reasonsForKarvise) {
    await prisma.ReasonForKarvise.create({ data: c })
    console.log(`✅ Seeded ReasonForKarvise: ${c.title}`)
  }

  // =======================
  // 📌 QUESTIONS
  // =======================
  await prisma.Question.deleteMany()
  for (const c of questions) {
    await prisma.Question.create({ data: c })
    console.log(`✅ Seeded Questions: ${c.title}`)
  }

  // =======================
  // 📌 EXPORT SERVİCES
  // =======================
  await prisma.ExportService.deleteMany()
  for (const c of exportServices) {
    await prisma.ExportService.create({ data: c })
    console.log(`✅ Seeded ExportServices: ${c.title}`)
  }
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect())
