import { DomainException } from '../../../shared/DomainException';
import { TeamName } from '../TeamName';

describe('値オブジェクト<"チーム名"> TeamName', () => {
  describe('チーム名に関する制約に従う引数を受け取った場合、値オブジェクトが生成される', () => {
    it.each`
      name
      ${'1'}
      ${'12'}
      ${'123'}
    `(
      '$name を引数に指定し、値オブジェクトのインスタンスが生成される',
      ({ name }: { name: string }) => {
        // Act
        const target = TeamName.create(name);

        // Assert
        expect(target.value).toBe(name);
      },
    );
  });

  describe('チーム名に関する制約を破る引数を受け取った場合、ドメイン層固有の例外が送出される', () => {
    it.each`
      name      | expected
      ${''}     | ${'チーム名が正しいフォーマットではありません。'}
      ${'1234'} | ${'チーム名が正しいフォーマットではありません。'}
      ${'abc'}  | ${'チーム名が正しいフォーマットではありません。'}
      ${'12a'}  | ${'チーム名が正しいフォーマットではありません。'}
    `(
      '"$name" を引数に指定し、$expected という例外を送出する。',
      ({ name, expected }) => {
        // Act
        const target = () => TeamName.create(name);

        // Assert
        expect(target).toThrow(expected);
        expect(target).toThrow(DomainException);
      },
    );
  });
});
