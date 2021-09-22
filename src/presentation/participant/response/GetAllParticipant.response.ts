import { GetAllParticipantDTO } from 'src/usecase/participant/QueryServiceInterface/GetAllParticipant.queryServiceInterface';

export class GetAllParticipantResponse {
  allParticipant: Participant[];

  public constructor(params: { participants: GetAllParticipantDTO[] }) {
    const { participants } = params;
    this.allParticipant = participants.map((participant) => {
      return new Participant({
        id: participant.id,
        name: participant.name,
        email: participant.email,
        tasks: participant.tasks,
        pair: participant.pair,
      });
    });
  }
}

class Participant {
  id: string;
  name: string;
  email: string;
  tasks: string[];
  pair: string;

  public constructor(params: {
    id: string;
    name: string;
    email: string;
    tasks: string[];
    pair: string;
  }) {
    this.id = params.id;
    this.name = params.name;
    this.email = params.email;
    this.tasks = params.tasks;
    this.pair = params.pair;
  }
}
