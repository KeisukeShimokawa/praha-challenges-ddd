import { Task } from './entity/Task';

export interface ITaskRepository {
  save(task: Task);
}
