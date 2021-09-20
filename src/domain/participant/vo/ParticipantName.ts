import { ValueObject } from '../../shared/ValueObject';

export class ParticipantName extends ValueObject<string, 'ParticipantName'> {
  public static create(name: string): ParticipantName {
    if (!name) {
      throw new Error('名前が指定されていません。');
    }

    return new ParticipantName(name);
  }
}
