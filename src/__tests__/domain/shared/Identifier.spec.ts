import { Identifier } from 'src/domain/shared/Identifier';
import * as nanoid from 'nanoid';

class DummyIdentifier extends Identifier<'DummyIdentifier'> {}

describe('識別子 Identifier の基底クラス', () => {
  describe('文字列の識別子を引数で与えることができる', () => {});
  describe('文字列の識別子を自動生成する', () => {});
  describe('識別子の等価性を担保できる', () => {});
});
