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
  /**
   * タイトルが設定され、参加者の課題進捗には紐づいていない状態のインスタンスを返す
   *
   * @param args 課題のタイトル
   * @returns タイトルが設定された課題インスタンスを返す
   */
  public static create(args: TaskCreateArgs): Task {
    const id = TaskId.create();

    const baseProps: TaskBaseProps = {
      ...args,
      taskProgressIds: [] as TaskProgressId[],
    };

    return new Task(id, baseProps);
  }
}
