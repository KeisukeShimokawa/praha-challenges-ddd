import { DomainException } from '../../../shared/DomainException';
import { PairName } from '../PairName';

describe('値オブジェクト<"ペア名"> PairName', () => {
  describe('ペア名に関する制約に従う引数を受け取った場合、値オブジェクトが生成される', () => {
    it('"a" を引数に指定し、値オブジェクトを生成する', () => {
      // Arrange
      const expected = 'a';

      // Act
      const actual = PairName.create(expected);

      // Assert
      expect(actual.value).toEqual(expected);
    });
  });

  describe('ペア名に関する制約を破る引数を受け取った場合、ドメイン層固有の例外が送出される', () => {
    it('"12" を引数に指定し、"ペア名が正しいフォーマットではありません。" という例外を送出する', () => {
      // Arrange
      const expected = 'ペア名が正しいフォーマットではありません。';
      const testData = '12';

      // Act
      const target = () => PairName.create(testData);

      // Assert
      expect(target).toThrow(expected);
      expect(target).toThrow(DomainException);
    });

    it('"" を引数に指定し、"ペア名が正しいフォーマットではありません。" という例外を送出する', () => {
      // Arrange
      const expected = 'ペア名が正しいフォーマットではありません。';
      const testData = '';

      // Act
      const target = () => PairName.create(testData);

      // Assert
      expect(target).toThrow(expected);
      expect(target).toThrow(DomainException);
    });
  });
});
