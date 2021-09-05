import { Identifier } from '../shared/Identifier';

export class ParticipantId extends Identifier<'ParticipantId'> {
  constructor(id?: string) {
    super(id);
  }
}
