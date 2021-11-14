import * as nanoid from 'nanoid';
import { Entity } from '../Entity';
import { Identifier } from '../Identifier';

class DummyIdentifier extends Identifier {
  public static create(): DummyIdentifier {
    return new DummyIdentifier();
  }
}

interface DummyEntityProps {
  name: string;
  age: number;
}

class DummyEntity extends Entity<DummyEntityProps, DummyIdentifier> {
  public static create(props: DummyEntityProps): DummyEntity {
    const id = DummyIdentifier.create();

    return new DummyEntity(id, props);
  }
}

describe('エンティティ Entity の基底クラス', () => {
  let nanoidSpy: jest.SpyInstance;

  beforeEach(() => {
    nanoidSpy = jest.spyOn(nanoid, 'nanoid');
  });

  afterEach(() => {
    nanoidSpy.mockReset();
  });

  describe('同一性を担保できる', () => {
    it('同じ値の識別子を自動採番し、属性が同じ場合、同じエンティティだと判断する', () => {
      // Given
      const props1 = {
        name: 'sample',
        age: 1,
      };
      const props2 = {
        name: 'sammple',
        age: 1,
      };
      const identity = '1234';
      nanoidSpy.mockReturnValue(identity);

      // When
      const entity1 = DummyEntity.create(props1);
      const entity2 = DummyEntity.create(props2);

      // Then
      expect(entity1.equals(entity2)).toBeTruthy();
    });

    it('同じ値の識別子を自動採番し、属性が異なる場合、同じエンティティだと判断する', () => {
      // Given
      const props1 = {
        name: 'sample name 1',
        age: 10,
      };
      const props2 = {
        name: 'sammple name 2',
        age: 20,
      };
      const identity = '1234';
      nanoidSpy.mockReturnValue(identity);

      // When
      const entity1 = DummyEntity.create(props1);
      const entity2 = DummyEntity.create(props2);

      // Then
      expect(entity1.equals(entity2)).toBeTruthy();
    });

    it('異なる識別子を自動採番し、属性が同じ場合、異なるエンティティだと判断する', () => {
      // Given
      const identity1 = '1234';
      const props1 = {
        name: 'sample',
        age: 1,
      };
      const identity2 = '5678';
      const props2 = {
        name: 'sammple',
        age: 1,
      };
      nanoidSpy.mockReturnValueOnce(identity1);
      nanoidSpy.mockReturnValueOnce(identity2);

      // When
      const entity1 = DummyEntity.create(props1);
      const entity2 = DummyEntity.create(props2);

      // Then
      expect(entity1.equals(entity2)).toBeFalsy();
    });
  });
});
