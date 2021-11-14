import { mock, MockProxy } from 'jest-mock-extended';
import { GetAllTaskUseCase } from 'src/usecase/task/GetAllTask.usecase';
import {
  IGetAllTaskQueryService,
  GetAllTaskDTO,
} from 'src/usecase/task/QueryServiceInterface/GetAllTask.queryServiceInterface';

describe('ユースケース: 課題をすべて取得する', () => {
  let sut: GetAllTaskUseCase;
  let queryServiceMock: MockProxy<IGetAllTaskQueryService>;

  beforeEach(() => {
    queryServiceMock = mock<IGetAllTaskQueryService>();
    sut = new GetAllTaskUseCase(queryServiceMock);
  });

  describe('リポジトリから渡されたデータをプレゼンテーション層へ返す', () => {
    it('2件のデータをクエリから受け取り、DTOを返す', async () => {
      // Arrange
      const expected: GetAllTaskDTO[] = [
        {
          id: '1',
          title: 'test',
          description: 'test 1',
          taskProgresses: [
            { participantId: '1', progressStatus: ProgressStatus.NOT_YET },
            { participantId: '2', progressStatus: ProgressStatus.DOING },
            { participantId: '3', progressStatus: ProgressStatus.IN_REVIEW },
          ],
        },
        {
          id: '2',
          title: 'test 2',
          description: 'test 2',
          taskProgresses: [],
        },
      ];
      queryServiceMock.getAll.mockResolvedValueOnce(expected);

      // Act
      const actual = await sut.execute();

      // Assert
      expect(actual).toEqual(expected);
    });
  });

  describe('クエリから送出された例外を、プレゼンテーション層へ流す', () => {
    it('クエリから例外を送出し、その例外をそのままプレゼンテーション層へ送出する', async () => {
      // Arrange
      const expected = new Error('クエリから送出されるエラー');
      queryServiceMock.getAll.mockRejectedValueOnce(expected);

      // Act
      // Assert
      expect(async () => await sut.execute()).rejects.toThrow(expected);
    });
  });
});
