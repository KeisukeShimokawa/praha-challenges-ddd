import { ParticipantId } from '../vo/ParticipantId';
import { Entity } from '../../shared/Entity';
import { TaskProgressStatus } from '../vo/TaskProgressStatus';
import { TaskId } from '../../task/vo/TaskId';
import { TaskProgressId } from '../vo/TaskProgressId';

interface TaskProgressCreateArgs {
  taskId: TaskId;
  participantId: ParticipantId;
}

interface TaskProgressBaseProps {
  taskId: TaskId;
  participantId: ParticipantId;
  progressStatus: TaskProgressStatus;
}

export class TaskProgress extends Entity<
  TaskProgressBaseProps,
  TaskProgressId
> {
  get props(): TaskProgressBaseProps {
    return this._props;
  }

  /**
   * 課題進捗が「未着手」の状態でエンティティを生成する
   *
   * @param args 課題進捗を生成する上で必要な情報
   * @returns 課題進捗エンティティ
   */
  public static create(args: TaskProgressCreateArgs): TaskProgress {
    const id = TaskProgressId.create();

    const baseProps = {
      ...args,
      progressStatus: TaskProgressStatus.NOT_YET,
    };

    return new TaskProgress(id, baseProps);
  }
}
