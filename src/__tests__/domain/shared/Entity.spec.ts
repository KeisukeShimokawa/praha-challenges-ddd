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
  describe('同一性担保できる', () => {
    it('同じ値の識別子を自動採番し、属性が同じ場合、同じエンティティだと判断する', () => {});
    it('同じ値の識別子を自動採番し、属性が異なる場合、同じエンティティだと判断する', () => {});
    it('異なる識別子を自動採番し、属性が同じ場合、異なるエンティティだと判断する', () => {});
  });
});
