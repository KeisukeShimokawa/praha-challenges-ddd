import { GetAllParticipantUseCase } from 'src/usecase/participant/GetAllParticipant.usecase';
import { ParticipantController } from 'src/presentation/participant/participant.controller';
import { Test, TestingModule } from '@nestjs/testing';
import { GetAllParticipantDTO } from 'src/usecase/participant/QueryServiceInterface/GetAllParticipant.queryServiceInterface';
import { EnrollmentStatusType } from 'src/domain/participant/vo/ParticipantEnrollmentStatus';

describe('コントローラー: 参加者に関するエンドポイントを提供する', () => {
  let sut: ParticipantController;
  let fakeGetAllParticipantUseCase: Partial<GetAllParticipantUseCase>;

  beforeEach(async () => {
    fakeGetAllParticipantUseCase = {
      execute: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParticipantController],
      providers: [
        {
          provide: GetAllParticipantUseCase,
          useValue: fakeGetAllParticipantUseCase,
        },
      ],
    }).compile();

    sut = module.get<ParticipantController>(ParticipantController);
  });

  describe('DIによりControllerがインスタンス化されていること', () => {
    it('Controller が undefined ではない', () => {
      expect(sut).toBeDefined();
    });
  });

  describe('"GET /participants" に対するリクエストができる', () => {
    it('参加者が1件も取得できなかった場合、空配列を返す', async () => {
      // Arrange
      jest
        .spyOn(fakeGetAllParticipantUseCase, 'execute')
        .mockResolvedValueOnce([]);

      // Act
      const actual = await sut.getAllParticipant();

      // Assert
      expect(actual.allParticipant.length).toBe(0);
    });

    it('参加者が1件以上取得できた場合、配列に各要素を格納してクライアントに返す', async () => {
      // Arrange
      jest
        .spyOn(fakeGetAllParticipantUseCase, 'execute')
        .mockResolvedValueOnce([
          new GetAllParticipantDTO({
            id: '1',
            email: 'sample@gmail.com',
            name: 'test',
            enrollmentStatus: EnrollmentStatusType.ENROLLMENT,
            tasks: [],
            pair: null,
          }),
        ]);

      // Act
      const actual = await sut.getAllParticipant();

      // Assert
      expect(actual.allParticipant.length).toBe(1);
    });
  });
});
