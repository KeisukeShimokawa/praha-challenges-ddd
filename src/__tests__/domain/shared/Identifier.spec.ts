import { Identifier } from 'src/domain/shared/Identifier';
import * as nanoid from 'nanoid';

class DummyIdentifier extends Identifier<'DummyIdentifier'> {}

describe('識別子 Identifier の基底クラス', () => {
  describe('文字列の識別子を自動生成する', () => {});
  let nanoidSpy: jest.SpyInstance;

  beforeEach(() => {
    nanoidSpy = jest.spyOn(nanoid, 'nanoid');
  });

  afterEach(() => {
    nanoidSpy.mockReset();
  });

  describe('文字列の識別子を引数で与えることができる', () => {
    it('引数に識別子となる文字列 "id-1" を与えて、識別子クラスを生成する', () => {
      // Given
      const expected = 'id-1';

      // When
      const actual = new DummyIdentifier(expected);

      // Then
      expect(actual.value).toBe(expected);
    });
  });

  describe('文字列の識別子を自動生成する', () => {
    it('引数に何も指定しない場合、nanoid を使用して自動的に識別子を生成する', () => {
      // Given
      const expected = '1234';
      nanoidSpy.mockReturnValueOnce(expected);

      // When
      const actual = new DummyIdentifier();

      // Then
      expect(actual.value).toBe(expected);
    });
  });

});
