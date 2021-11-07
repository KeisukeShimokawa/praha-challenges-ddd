import { DomainException } from '../../shared/DomainException';
import { ValueObject } from '../../shared/ValueObject';

export class PairName extends ValueObject<string> {
  private static isValidName(name: string): boolean {
    const re = /[a-z]{1}/;
    const result = re.test(String(name));
    return result;
  }

  public static create(name: string): PairName {
    if (!this.isValidName(name)) {
      throw new DomainException('ペア名が正しいフォーマットではありません。');
    }

    return new PairName(name);
  }
}
