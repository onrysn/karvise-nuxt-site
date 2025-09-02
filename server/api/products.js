import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const method = event.node.req.method

  // ----------------------
  // GET - listeleme ve filtreleme
  // ----------------------
  if (method === 'GET') {
    const url = new URL(event.node.req.url || '', `http://${event.node.req.headers.host}`)
    const categoryQuery = url.searchParams.get('category')
    const subCategoryQuery = url.searchParams.get('subCategory')
    const searchQuery = url.searchParams.get('search')

    const where = { isDeleted: false }

    // Kategori filtreleme
    if (categoryQuery) {
      const category = await prisma.category.findFirst({ where: { name: categoryQuery } })
      if (category) where.categoryId = category.id
    }

    // Alt kategori filtreleme
    if (subCategoryQuery && where.categoryId) {
      const subCategory = await prisma.subCategory.findFirst({
        where: { name: subCategoryQuery, categoryId: where.categoryId }
      })
      if (subCategory) where.subCategoryId = subCategory.id
    }

    // Arama filtreleme
    if (searchQuery) {
      where.AND = [
        ...(where.AND || []),
        {
          OR: [
            { title: { contains: searchQuery } },
            { subtitle: { contains: searchQuery } }
          ]
        }
      ]
    }

    return await prisma.product.findMany({
      where,
      include: { category: true, subCategory: true },
      orderBy: { createdAt: 'desc' }
    })
  }

  // ----------------------
  // POST - yeni ürün ekle
  // ----------------------
  if (method === 'POST') {
    const body = await readBody(event)

    let categoryId = null
    let subCategoryId = null

    if (body.category) {
      const category = await prisma.category.upsert({
        where: { name: body.category },
        update: {},
        create: { name: body.category }
      })
      categoryId = category.id
    }

    if (body.subCategory && categoryId) {
      let subCategory = await prisma.subCategory.findFirst({
        where: { name: body.subCategory, categoryId }
      })
      if (!subCategory) {
        subCategory = await prisma.subCategory.create({
          data: { name: body.subCategory, categoryId }
        })
      }
      subCategoryId = subCategory.id
    }

    return await prisma.product.create({
      data: {
        title: body.title,
        subtitle: body.subtitle,
        description: body.description,
        productDetail: body.productDetail,
        price: body.price,
        img: body.img,
        imgProductDetail: body.imgProductDetail,
        link: body.link,
        isDeleted: body.isDeleted ?? false,
        categoryId,
        subCategoryId
      }
    })
  }

  // ----------------------
  // PUT - ürün güncelle
  // ----------------------
  if (method === 'PUT') {
    const { subtitle, updatedData } = await readBody(event)

    let categoryId = null
    let subCategoryId = null

    if (updatedData.category) {
      const category = await prisma.category.upsert({
        where: { name: updatedData.category },
        update: {},
        create: { name: updatedData.category }
      })
      categoryId = category.id
    }

    if (updatedData.subCategory && categoryId) {
      let subCategory = await prisma.subCategory.findFirst({
        where: { name: updatedData.subCategory, categoryId }
      })
      if (!subCategory) {
        subCategory = await prisma.subCategory.create({
          data: { name: updatedData.subCategory, categoryId }
        })
      }
      subCategoryId = subCategory.id
    }

    return await prisma.product.update({
      where: { subtitle },
      data: {
        ...updatedData,
        categoryId,
        subCategoryId
      }
    })
  }

  // ----------------------
  // DELETE - soft delete
  // ----------------------
  // if (method === 'DELETE') {
  //   const { subtitle } = await readBody(event)
  //   return await prisma.product.update({
  //     where: { subtitle },
  //     data: { isDeleted: true }
  //   })
  // }
})
