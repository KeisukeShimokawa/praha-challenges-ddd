// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

import { DomainException } from '../../shared/DomainException';
import { ValueObject } from '../../shared/ValueObject';

export class ParticipantEmail extends ValueObject<string> {
  private static isValidEmail(email: string): boolean {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const result = re.test(String(email));
    return result;
  }

  /**
   * メールアドレスを生成するメソッド
   *
   * @param email メールアドレス
   * @returns フォーマットが有効であり、小文字に変換したメールアドレス
   */
  public static create(email: string): ParticipantEmail {
    const emailLowerCase = email.toLowerCase();

    if (!this.isValidEmail(emailLowerCase)) {
      throw new DomainException(
        'メールアドレスが正しいフォーマットではありません。',
      );
    }

    return new ParticipantEmail(emailLowerCase);
  }
}
