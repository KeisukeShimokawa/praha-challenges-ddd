import { Identifier } from '../../shared/Identifier';

export class PairId extends Identifier {
  public static create(id?: string): PairId {
    return new PairId(id);
  }
}
