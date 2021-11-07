type PrimitiveTypes = string | number | boolean;

/**
 * 値オブジェクト
 *
 * TypeScriptは基本的には構造的型システムを採用しているが、
 * 1つでもprivateなプロパティが存在している場合、
 * そのクラスだけ公称型 (nominal typing) になるため、
 * 対象の値をprivateでカプセル化すればいい
 *
 * https://book.yyts.org/reference/object-oriented/class/class-nominality
 */
export abstract class ValueObject<T extends PrimitiveTypes> {
  private readonly _value: T;

  protected constructor(value: T) {
    this._value = value;
  }

  public equals(vo: ValueObject<T>): boolean {
    return this._value === vo._value;
  }

  public get value(): T {
    return this._value;
  }
}
