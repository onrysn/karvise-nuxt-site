import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default defineEventHandler(async (event) => {
  const url = new URL(event.node.req.url || '', `http://${event.node.req.headers.host}`)
  const categoryName = url.searchParams.get('category')

  if (!categoryName) return []

  const category = await prisma.category.findFirst({ where: { name: categoryName } })
  if (!category) return []

  return await prisma.subCategory.findMany({
    where: { categoryId: category.id },
    orderBy: { name: 'asc' }
  })
})
