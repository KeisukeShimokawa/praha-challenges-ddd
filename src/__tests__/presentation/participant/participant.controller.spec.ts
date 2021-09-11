import { PrismaClient } from '.prisma/client';
import { GetAllParticipantQueryService } from 'src/infrastructure/db/participant/QueryService/GetAllParticipant.QueryService';
import { GetAllParticipantUseCase } from 'src/usecase/participant/GetAllParticipant.usecase';
import { ParticipantController } from 'src/presentation/participant/participant.controller';

// jest.mock('.prisma/client');
// jest.mock(
//   'src/infrastructure/db/participant/QueryService/GetAllParticipant.QueryService',
// );
// jest.mock('src/presentation/participant/participant.controller');

// const PrismaClientMock = PrismaClient as jest.Mock;
// const GetAllParticipantQSMock = GetAllParticipantQueryService as jest.Mock;
// const GetAllParticipantUseCaseMock = GetAllParticipantUseCase as jest.Mock;

describe('コントローラー: 参加者に関するエンドポイントを提供する', () => {
  let sut: ParticipantController;

  describe('"GET /participant" に対するリクエストができる', () => {
    let PrismaClientMock: jest.Mock;
    let GetAllParticipantQSMock: jest.Mock;
    let GetAllParticipantUseCaseMock: jest.Mock;

    // beforeEach(() => {
    //   PrismaClientMock = PrismaClient as jest.Mock;
    //   GetAllParticipantQSMock = GetAllParticipantQueryService as jest.Mock;
    //   GetAllParticipantUseCaseMock = GetAllParticipantUseCase as jest.Mock;

    //   sut = new ParticipantController();
    // });

    // it('参加者が', async () => {
    //   // Arrange
    //   PrismaClientMock.mockReturnValueOnce(new PrismaClient());
    //   GetAllParticipantQSMock.mockImplementationOnce();

    //   // Act
    //   // Assert
    // });
  });
});
