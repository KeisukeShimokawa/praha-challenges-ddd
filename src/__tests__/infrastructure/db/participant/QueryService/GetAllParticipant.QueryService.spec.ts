import { GetAllParticipantQueryService } from 'src/infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { PrismaService } from 'src/shared/prisma/PrismaService';
import { IGetAllParticipantQueryService } from 'src/usecase/participant/QueryServiceInterface/GetAllParticipant.queryServiceInterface';
import { ParticipantBuilder } from 'src/__tests__/builders/participant.builder';

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
      const testData = [
        await ParticipantBuilder(prisma),
        await ParticipantBuilder(prisma),
      ];

      // Act
      const actual = await sut.getAll();

      // Assert
      expect(actual.length).toBe(testData.length);
    });

    it('DBに登録されている参加者の情報を取得した際、クエリ用のDTOにマッピングされている', async () => {
      // Arrange
      const testData = await ParticipantBuilder(prisma);

      // Act
      const actual = await sut.getAll();

      // Assert
      expect(actual[0].id).toBe(testData.id);
      expect(actual[0].name).toBe(testData.name);
      expect(actual[0].email).toBe(testData.email);
      expect(actual[0].enrollmentStatus).toBe(testData.enrollmentStatus);
      expect(actual[0].tasks.length).toEqual(testData.progresses.length);
      expect(actual[0].pair).toEqual(testData.pairId);
    });
  });
});
