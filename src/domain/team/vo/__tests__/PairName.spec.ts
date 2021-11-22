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
    it.each`
      name    | expected
      ${''}   | ${'ペア名が正しいフォーマットではありません。'}
      ${'12'} | ${'ペア名が正しいフォーマットではありません。'}
      ${'ab'} | ${'ペア名が正しいフォーマットではありません。'}
    `(
      '"$name" を引数に指定し、"$expected" という例外を送出する。',
      ({ name, expected }) => {
        // Act
        const target = () => PairName.create(name);

        // expect
        expect(target).toThrow(expected);
        expect(target).toThrow(DomainException);
      },
    );
  });
});
