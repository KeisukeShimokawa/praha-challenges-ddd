import { ParticipantId } from 'src/domain/participant/vo/ParticipantId';
import { Entity } from 'src/domain/shared/Entity';
import { ProgressStatus } from '../vo/ProgressStatus';
import { TaskId } from '../vo/TaskId';
import { TaskProgressId } from '../vo/TaskProgressId';

interface TaskProgressCreateArgs {
  taskId: TaskId;
  participantId: ParticipantId;
}

interface TaskProgressBaseProps {
  taskId: TaskId;
  participantId: ParticipantId;
  progressStatus: ProgressStatus;
}

export class TaskProgress extends Entity<
  TaskProgressBaseProps,
  TaskProgressId
> {
  get props(): TaskProgressBaseProps {
    return this._props;
  }

  public static create(args: TaskProgressCreateArgs): TaskProgress {
    const id = TaskProgressId.create();

    const baseProps = {
      ...args,
      progressStatus: ProgressStatus.NOT_YET,
    };

    return new TaskProgress(id, baseProps);
  }
}
