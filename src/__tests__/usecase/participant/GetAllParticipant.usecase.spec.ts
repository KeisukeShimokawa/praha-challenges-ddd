import { MockProxy, mock } from 'jest-mock-extended';
import { GetAllParticipantUseCase } from 'src/usecase/participant/GetAllParticipant.usecase';
import {
  GetAllParticipantDTO,
  IGetAllParticipantQueryService,
} from 'src/usecase/participant/QueryServiceInterface/GetAllParticipant.queryServiceInterface';

describe('ユースケース: 参加者全員を取得する', () => {
  let queryServiceMock: MockProxy<IGetAllParticipantQueryService>;
  let sut: GetAllParticipantUseCase;

  beforeEach(() => {
    queryServiceMock = mock<IGetAllParticipantQueryService>();
    sut = new GetAllParticipantUseCase(queryServiceMock);
  });

  describe('リポジトリから渡されたデータをプレゼンテーション層へ返す', () => {
    it('2件のデータをクエリから受け取り、DTOを返す', async () => {
      // Arrange
      const expected: GetAllParticipantDTO[] = [
        {
          id: '1',
          name: 'test',
          email: 'test@example.com',
          tasks: [],
          pair: null,
        },
        {
          id: '2',
          name: 'test',
          email: 'test@example.com',
          tasks: [],
          pair: null,
        },
      ];
      queryServiceMock.getAll.mockResolvedValueOnce(expected);

      // Act
      const actual = await sut.execute();

      // Assert
      expect(actual).toEqual(expected);
    });
  });
});
