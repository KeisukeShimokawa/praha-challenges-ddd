import { Identifier } from './Identifier';

export abstract class Entity<T, U extends Identifier<string>> {
  constructor(protected readonly _id: U, protected readonly _props: T) {}

  public equals(object: Entity<T, U>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
