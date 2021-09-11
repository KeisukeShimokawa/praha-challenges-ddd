import { GetAllParticipantQueryService } from 'src/infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { PrismaService } from 'src/shared/prisma/PrismaService';
import { IGetAllParticipantQueryService } from 'src/usecase/participant/QueryServiceInterface/GetAllParticipant.queryServiceInterface';

describe('クエリサービス: 参加者全員を取得するクエリサービス', () => {
  let prisma: PrismaService;
  let sut: IGetAllParticipantQueryService;

  beforeEach(() => {
    prisma = new PrismaService();
    sut = new GetAllParticipantQueryService(prisma);
  });

  afterEach(async () => {
    await prisma.truncate();
    await prisma.$disconnect();
  });

  describe('参加者全員を永続化層から取得できる', () => {
    it('DBに参加者が2件登録されている場合に、2件とも取得できる', async () => {
      // Arrange
      const testData = await prisma.participant.createMany({
        data: [
          {
            id: '1',
            name: 'test',
            email: 'test@example.com',
            enrollmentStatus: '在籍中',
          },
          {
            id: '2',
            name: 'test2',
            email: 'test2@example.com',
            enrollmentStatus: '在籍中',
          },
        ],
      });

      // Act
      const actual = await sut.getAll();

      // Assert
      expect(actual.length).toBe(testData.count);
    });
  });
});
