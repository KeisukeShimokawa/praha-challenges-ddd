import { GetAllTaskDTO } from 'src/usecase/task/QueryServiceInterface/GetAllTask.queryServiceInterface';

export class GetAllTaskResponse {
  allTask: Task[];

  public constructor(params: { tasks: GetAllTaskDTO[] }) {
    const { tasks } = params;
    this.allTask = tasks.map((task) => {
      return new Task({
        id: task.id,
        title: task.title,
        description: task.description,
      });
    });
  }
}

class Task {
  constructor(
    private readonly params: {
      id: string;
      title: string;
      description: string;
    },
  ) {}
}
