import { PrismaClient } from '.prisma/client';
import * as faker from 'faker';

const prisma = new PrismaClient();

/**
 * 参加者
 * 課題
 * チーム
 * ペア
 */
async function main() {
  console.log('fetching database ...');
  console.log(process.env.NODE_ENV);

  const participants = await prisma.participant.createMany({
    data: [...Array(20)].map((_x) => {
      return {
        id: faker.datatype.uuid(),
        name: faker.internet.userName(),
        email: faker.internet.email(),
        enrollmentStatus: '在籍中',
      };
    }),
  });

  console.log(participants);

  const tasks = await prisma.task.createMany({
    data: [...Array(80)].map((_x) => {
      return {
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
      };
    }),
  });

  console.log(tasks);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
