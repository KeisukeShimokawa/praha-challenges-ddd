export class GetAllParticipantDTO {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly tasks: string[];
  public readonly pair: string;

  public constructor(props: {
    id: string;
    name: string;
    email: string;
    tasks: string[];
    pair: string;
  }) {
    const { id, name, email, tasks, pair } = props;
    this.id = id;
    this.name = name;
    this.email = email;
    this.tasks = tasks;
    this.pair = pair;
  }
}

export interface IGetAllParticipantQueryService {
  getAll(): Promise<GetAllParticipantDTO[]>;
}
