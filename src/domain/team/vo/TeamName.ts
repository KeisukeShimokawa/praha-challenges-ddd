import { DomainException } from '../../shared/DomainException';
import { ValueObject } from '../../shared/ValueObject';

export class TeamName extends ValueObject<string> {
  public static isValidName(name: string): boolean {
    const re = new RegExp(/^[0-9]{1,3}$/, 'i');
    const result = re.test(String(name));
    return result;
  }

  /**
   * 英字3文字のチーム名のインスタンスを生成する
   *
   * @param name 数字3文字のチーム名
   * @returns チーム名の値オブジェクト
   */
  public static create(name: string): TeamName {
    if (!this.isValidName(name)) {
      throw new DomainException('チーム名が正しいフォーマットではありません。');
    }
    return new TeamName(name);
  }
}
