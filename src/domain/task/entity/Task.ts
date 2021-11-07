import { TaskId } from '../vo/TaskId';
import { TaskTitle } from '../vo/TaskTitle';
import { Entity } from '../../shared/Entity';
import { TaskProgressId } from '../../participant/vo/TaskProgressId';

interface TaskCreateArgs {
  title: TaskTitle;
}

interface TaskBaseProps {
  title: TaskTitle;
  taskProgressIds: TaskProgressId[];
}

export class Task extends Entity<TaskBaseProps, TaskId> {
  public static create(args: TaskCreateArgs): Task {
    const id = TaskId.create();

    const baseProps: TaskBaseProps = {
      ...args,
      taskProgressIds: [] as TaskProgressId[],
    };

    return new Task(id, baseProps);
  }
}
