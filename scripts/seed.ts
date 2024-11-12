import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  const password = await hash('admin123', 12)
  
  const admin = await prisma.user.upsert({
    where: { email: 'anys.tekaya@ariskan.fr' },
    update: {},
    create: {
      email: 'anys.tekaya@ariskan.fr',
      name: 'Admin',
      password,
      role: 'ADMIN',
    },
  })

  console.log({ admin })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })