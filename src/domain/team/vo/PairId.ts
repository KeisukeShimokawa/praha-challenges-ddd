import { Identifier } from '../../shared/Identifier';

export class PairId extends Identifier {
  public static create(id?): PairId {
    return new PairId(id);
  }
}
