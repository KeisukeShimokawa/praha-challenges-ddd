import { Identifier } from 'src/domain/shared/Identifier';
import * as nanoid from 'nanoid';

class DummyIdentifier extends Identifier {
  public static create(): DummyIdentifier {
    return new DummyIdentifier();
  }
}

describe('識別子 Identifier の基底クラス', () => {
  let nanoidSpy: jest.SpyInstance;

  beforeEach(() => {
    nanoidSpy = jest.spyOn(nanoid, 'nanoid');
  });

  afterEach(() => {
    nanoidSpy.mockReset();
  });

  describe('文字列の識別子を create で生成する', () => {
    it('引数に何も指定しない場合、nanoid を使用して自動的に識別子を生成できる', () => {
      // Given
      const expected = '1234';
      nanoidSpy.mockReturnValueOnce(expected);

      // When
      const actual = DummyIdentifier.create();

      // Then
      expect(actual.value).toBe(expected);
    });
  });

  describe('識別子の等価性を equals で担保できる', () => {
    it('同じ文字列の値を有する識別子を2つ生成し、equals で比較すると true となる', () => {
      // Given
      const identity = 'id-same-1';
      nanoidSpy.mockReturnValue(identity);

      // When
      const identifier1 = DummyIdentifier.create();
      const identifier2 = DummyIdentifier.create();

      // Then
      expect(identifier1 === identifier2).toBeFalsy();
      expect(identifier1.equals(identifier2)).toBeTruthy();
    });

    it('異なる文字列の値を有する識別子を2つ生成し、 equals で比較すると false になる', () => {
      // Given
      const identity1 = 'id-wrong-1';
      const identity2 = 'id-wrong-2';
      nanoidSpy.mockReturnValueOnce(identity1);
      nanoidSpy.mockReturnValueOnce(identity2);

      // When
      const identifier1 = DummyIdentifier.create();
      const identifier2 = DummyIdentifier.create();

      // Then
      expect(identifier1.equals(identifier2)).toBeFalsy();
    });
  });
});
