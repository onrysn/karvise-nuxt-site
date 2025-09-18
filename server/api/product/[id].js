import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const idParam = event.context.params?.id

  if (!idParam) {
    throw createError({ statusCode: 400, statusMessage: 'ID parametresi eksik' })
  }

  const id = parseInt(idParam, 10)
  if (isNaN(id)) {
    throw createError({ statusCode: 400, statusMessage: 'Geçersiz ID parametresi' })
  }

  const product = await prisma.product.findUnique({
    where: { id },
    include: { category: true, subCategory: true }
  })

  if (!product) {
    throw createError({ statusCode: 404, statusMessage: 'Ürün bulunamadı' })
  }

  return product
})
