type PrimitiveTypes = string | number | boolean;

export abstract class ValueObject<T extends PrimitiveTypes, U extends string> {
  private _: U;
  private readonly _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  public equals(vo: ValueObject<T, U>): boolean {
    return this._value === vo._value;
  }

  public get value(): T {
    return this._value;
  }
}
