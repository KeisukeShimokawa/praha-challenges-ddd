// https://www.prisma.io/docs/guides/database/seed-database

import { PrismaClient } from '.prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('check environment ...');
  console.log(process.env.NODE_ENV);

  console.log('seeding data ...');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
