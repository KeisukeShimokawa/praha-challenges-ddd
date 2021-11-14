import { Identifier } from '../../shared/Identifier';

export class ParticipantId extends Identifier {
  public static create(id?: string): ParticipantId {
    return new ParticipantId(id);
  }
}
