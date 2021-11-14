import { DomainException } from '../../../shared/DomainException';
import { TeamName } from '../TeamName';

describe('値オブジェクト<"チーム名"> TeamName', () => {
  describe('チーム名に関する制約に従う引数を受け取った場合、値オブジェクトが生成される', () => {
    it('"123" を引数に指定し、値オブジェクトを生成する', () => {
      // Arrange
      const expected = '123';

      // Act
      const actual = TeamName.create(expected);

      // Assert
      expect(actual.value).toEqual(expected);
    });
  });

  describe('チーム名に関する制約を破る引数を受け取った場合、ドメイン層固有の例外が送出される', () => {
    it('"1234" を引数に指定し、"チーム名が正しいフォーマットではありません。" という例外を送出する', () => {
      // Arrange
      const expected = 'チーム名が正しいフォーマットではありません。';
      const testData = '1234';

      // Act
      // Assert
      expect(() => TeamName.create(testData)).toThrow(
        new DomainException(expected),
      );
    });

    it('"" を引数に指定し、"チーム名が正しいフォーマットではありません。" という例外を送出する', () => {
      // Arrange
      const expected = 'チーム名が正しいフォーマットではありません。';
      const testData = '';

      // Act
      // Assert
      expect(() => TeamName.create(testData)).toThrow(
        new DomainException(expected),
      );
    });
  });
});
