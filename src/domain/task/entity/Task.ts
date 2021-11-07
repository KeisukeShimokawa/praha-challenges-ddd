import { TaskDescription } from '../vo/TaskDescription';
import { TaskId } from '../vo/TaskId';
import { TaskTitle } from '../vo/TaskTitle';
import { TaskProgress } from '../../participant/entity/TaskProgress';
import { Entity } from '../../shared/Entity';

interface TaskCreateArgs {
  title: TaskTitle;
  description: TaskDescription;
  taskProgresses: TaskProgress[];
}

interface TaskBaseProps {
  title: TaskTitle;
  description: TaskDescription;
  taskProgresses: TaskProgress[];
}

export class Task extends Entity<TaskBaseProps, TaskId> {
  public static create(args: TaskCreateArgs): Task {
    const id = TaskId.create();

    const baseProps: TaskBaseProps = {
      ...args,
    };

    return new Task(id, baseProps);
  }
}
