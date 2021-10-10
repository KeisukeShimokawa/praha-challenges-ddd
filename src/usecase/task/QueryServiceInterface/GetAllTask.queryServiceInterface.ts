export class GetAllTaskDTO {
  public readonly id: string;
  public readonly title: string;
  public readonly description: string;
  public readonly taskProgresses: {
    participantId: string;
    progressStatus: string;
  }[];

  public constructor(props: {
    id: string;
    title: string;
    description: string;
    taskProgresses: {
      participantId: string;
      progressStatus: string;
    }[];
  }) {
    const { id, title, description, taskProgresses } = props;
    this.id = id;
    this.title = title;
    this.description = description;
    this.taskProgresses = taskProgresses;
  }
}

export interface IGetAllTaskQueryService {
  getAll: () => Promise<GetAllTaskDTO[]>;
}
