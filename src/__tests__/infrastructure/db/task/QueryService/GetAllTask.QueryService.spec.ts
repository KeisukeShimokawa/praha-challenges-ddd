import { Prisma } from '.prisma/client';
import { GetAllTaskQueryService } from 'src/infrastructure/db/task/QueryService/GetAllTask.QueryService';
import { PrismaService } from 'src/shared/prisma/PrismaService';
import { TaskBuilder } from 'src/__tests__/builders/task.builder';

describe('クエリサービス: 課題を全件取得するクエリサービス', () => {
  let sut: GetAllTaskQueryService;
  let prisma: PrismaService;

  beforeEach(() => {
    prisma = new PrismaService();
    sut = new GetAllTaskQueryService(prisma);
  });

  afterEach(async () => {
    await prisma.truncate();
    await prisma.$disconnect();
  });

  describe('課題を全件、永続化層から取得できる', () => {
    it('DBに課題が2件登録されている場合に、2件とも取得できる', async () => {
      // Arrange
      const testData = [await TaskBuilder(prisma), await TaskBuilder(prisma)];

      // Act
      const actual = await sut.getAll();

      // Assert
      expect(actual.length).toBe(testData.length);
      expect(actual[0].id).toBe(testData[0].id);
      expect(actual[0].title).toBe(testData[0].name);
      expect(actual[0].description).toBe(testData[0].description);
      expect(actual[0].taskProgresses).toEqual(testData[0].progresses);
    });
  });
});
