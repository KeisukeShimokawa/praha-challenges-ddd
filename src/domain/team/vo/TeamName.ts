import { ValueObject } from 'src/domain/shared/ValueObject';

export class TeamName extends ValueObject<string, 'TeamName'> {
  public static create(name: string): TeamName {
    if (!this.isValidName(name)) {
      throw new Error('チーム名が正しいフォーマットではありません。');
    }

    return new TeamName(name);
  }

  public static isValidName(name: string): boolean {
    const re = /[0-9]{1,3}/;
    const result = re.test(String(name));
    return result;
  }
}
