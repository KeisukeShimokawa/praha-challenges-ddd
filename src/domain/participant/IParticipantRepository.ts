import { Participant } from './entity/Participant';

export interface IParticipantRespository {
  save(participant: Participant);
}
