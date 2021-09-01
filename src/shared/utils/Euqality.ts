// https://github.com/epoberezkin/fast-deep-equal/blob/master/src/index.jst
export class Equality {
  public static isEqual<T>(a: T, b: T): boolean {
    // プリミティブ型の場合は厳密等価比較で検証できる
    if (a === b) {
      return true;
    }

    if (Array.isArray(a) && Array.isArray(b)) {
      const lengthA = a.length;
      const lengthB = b.length;

      if (lengthA !== lengthB) return false;

      for (let i; i < lengthA; i++) {
        if (!this.isEqual(a[i], b[i])) return false;
      }

      return true;
    }

    if (this.isObject(a) && this.isObject(b)) {
      const keysA = Object.keys(a);
      const keysB = Object.keys(b);

      if (keysA.length !== keysB.length) return false;

      for (let i = 0; i < keysA.length; i++) {
        const keyA = keysA[i];

        if (!Object.prototype.hasOwnProperty.call(b, keyA)) return false;
        if (!this.isEqual(a[keyA], b[keyA])) return false;
      }
      return true;
    }

    // 両方が NaN の場合は true, そうではない場合は false
    // https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/NaN
    return a !== a && b !== b;
  }

  /**
   * 対象変数がオブジェクトであるかどうか判定する
   *
   * https://github.com/lodash/lodash/blob/2f79053d7bc7c9c9561a30dda202b3dcd2b72b90/isObject.js
   */
  private static isObject<T>(value: T): boolean {
    const type = typeof value;
    return value !== null && (type === 'object' || type === 'function');
  }
}
