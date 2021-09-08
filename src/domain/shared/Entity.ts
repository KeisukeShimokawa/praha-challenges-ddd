import { Identifier } from './Identifier';

export abstract class Entity<T, U extends Identifier<string>> {
  protected readonly _id: U;
  protected readonly _props: T;

  protected constructor(id: U, props: T) {
    this._id = id;
    this._props = props;
  }

  public equals(object: Entity<T, U>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    return this._id.equals(object._id);
  }
}
