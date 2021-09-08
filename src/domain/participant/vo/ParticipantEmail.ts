// https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript

import { ValueObject } from '../../shared/ValueObject';

export class ParticipantEmail extends ValueObject<string, 'ParticipantEmail'> {
  private static isValidEmail(email: string): boolean {
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const result = re.test(String(email));

    return result;
  }

  public static create(email: string): ParticipantEmail {
    if (!this.isValidEmail(email)) {
      throw new Error('メールアドレスが正しいフォーマットではありません。');
    }

    return new ParticipantEmail(email.toLowerCase());
  }
}
