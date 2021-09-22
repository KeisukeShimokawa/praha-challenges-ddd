export class GetAllParticipantDTO {
  public readonly id: string;
  public readonly name: string;
  public readonly email: string;
  public readonly enrollmentStatus: string;
  public readonly tasks: string[];
  public readonly pair: string;

  public constructor(props: {
    id: string;
    name: string;
    email: string;
    enrollmentStatus: string;
    tasks: string[];
    pair: string;
  }) {
    const { id, name, email, enrollmentStatus, tasks, pair } = props;
    this.id = id;
    this.name = name;
    this.email = email;
    this.enrollmentStatus = enrollmentStatus;
    this.tasks = tasks;
    this.pair = pair;
  }
}

export interface IGetAllParticipantQueryService {
  getAll(): Promise<GetAllParticipantDTO[]>;
}
