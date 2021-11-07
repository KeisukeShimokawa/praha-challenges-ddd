import { DomainException } from '../../shared/DomainException';
import { ValueObject } from '../../shared/ValueObject';

export class TeamName extends ValueObject<string> {
  public static isValidName(name: string): boolean {
    const re = /[0-9]{1,3}/;
    const result = re.test(String(name));
    return result;
  }

  public static create(name: string): TeamName {
    if (!this.isValidName(name)) {
      throw new DomainException('チーム名が正しいフォーマットではありません。');
    }
    return new TeamName(name);
  }
}
