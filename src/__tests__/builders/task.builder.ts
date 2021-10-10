import * as faker from 'faker';
import { Prisma } from '.prisma/client';
import { PrismaService } from 'src/shared/prisma/PrismaService';

export const TaskBuilder = async (
  client: PrismaService,
  overrides?: Partial<Prisma.TaskCreateInput>,
) => {
  const defaultTask: Prisma.TaskCreateInput = {
    id: faker.datatype.uuid(),
    name: faker.datatype.string(),
    description: faker.datatype.string(),
    progresses: {},
  };

  const createTask = {
    ...defaultTask,
    ...overrides,
  };

  return await client.task.create({
    data: createTask,
    include: {
      progresses: true,
    },
  });
};
