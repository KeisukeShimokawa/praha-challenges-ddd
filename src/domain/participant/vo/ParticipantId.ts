import { Identifier } from '../../shared/Identifier';

export class ParticipantId extends Identifier<'ParticipantId'> {
  public static create(id?): ParticipantId {
    return new ParticipantId(id);
  }
}
