import { Identifier } from '../shared/Identifier';

export class PairId extends Identifier<'PairId'> {
  public static create(id?): PairId {
    return new PairId(id);
  }
}
