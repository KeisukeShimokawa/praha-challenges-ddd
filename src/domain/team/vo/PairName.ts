import { ValueObject } from 'src/domain/shared/ValueObject';

export class PairName extends ValueObject<string, 'PairName'> {
  public static create(name: string): PairName {
    if (!this.isValidName(name)) {
      throw new Error('ペア名が正しいフォーマットではありません。');
    }

    return new PairName(name);
  }

  private static isValidName(name: string): boolean {
    const re = /[a-z]{1}/;
    const result = re.test(String(name));
    return result;
  }
}
