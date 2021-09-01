import { Entity } from 'src/domain/shared/Entity';
import { Identifier } from 'src/domain/shared/Identifier';

interface DummyEntityProps {
  name: string;
  age: number;
}

class DummyIdentifier extends Identifier<'DummyIdentifier'> {}

class DummyEntity extends Entity<DummyEntityProps, DummyIdentifier> {
  constructor(id: DummyIdentifier, props: DummyEntityProps) {
    super(id, props);
  }
}

describe('エンティティ Entity の基底クラス', () => {
    it('異なる識別子を自動採番し、属性が同じ場合、異なるエンティティだと判断する', () => {});
  describe('同一性を担保できる', () => {
    it('同じ値の識別子を自動採番し、属性が同じ場合、同じエンティティだと判断する', () => {
      // Given
      const identifier1 = new DummyIdentifier('sample');
      const props1 = {
        name: 'sample',
        age: 1,
      };
      const identifier2 = new DummyIdentifier('sample');
      const props2 = {
        name: 'sammple',
        age: 1,
      };

      // When
      const entity1 = new DummyEntity(identifier1, props1);
      const entity2 = new DummyEntity(identifier2, props2);

      // Then
      expect(entity1.equals(entity2)).toBeTruthy();
    });

    it('同じ値の識別子を自動採番し、属性が異なる場合、同じエンティティだと判断する', () => {
      // Given
      const identifier1 = new DummyIdentifier('sample');
      const props1 = {
        name: 'sample name 1',
        age: 10,
      };
      const identifier2 = new DummyIdentifier('sample');
      const props2 = {
        name: 'sammple name 2',
        age: 20,
      };

      // When
      const entity1 = new DummyEntity(identifier1, props1);
      const entity2 = new DummyEntity(identifier2, props2);

      // Then
      expect(entity1.equals(entity2)).toBeTruthy();
    });

  });
});
