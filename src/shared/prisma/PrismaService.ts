import { PrismaClient } from '.prisma/client';
import { OnModuleDestroy, OnModuleInit } from '@nestjs/common';

export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  // https://www.prisma.io/docs/concepts/components/prisma-client/crud#deleting-all-data-with-raw-sql--truncate
  public async truncate() {
    for (const { tablename } of await this
      .$queryRaw`SELECT tablename FROM pg_tables WHERE schemaname='public'`) {
      if (tablename !== '_prisma_migrations') {
        try {
          await this.$queryRaw(
            `TRUNCATE TABLE "public"."${tablename}" CASCADE;`,
          );
        } catch (error) {
          console.log({ error });
        }
      }
    }
  }
}
