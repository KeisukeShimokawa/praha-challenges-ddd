type PrimitiveTypes = string | number | boolean;

export abstract class ValueObject<T extends PrimitiveTypes, U extends string> {
  private _: U;
  protected readonly _value: T;

  public constructor(value: T) {
    this._value = value;
  }

  public equals(vo: ValueObject<T, U>): boolean {
    return this.value === vo.value;
  }

  public get value(): T {
    return this._value;
  }
}
