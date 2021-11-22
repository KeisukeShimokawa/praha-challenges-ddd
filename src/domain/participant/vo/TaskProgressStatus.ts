import { DomainException } from '../../shared/DomainException';
import { ValueObject } from '../../shared/ValueObject';

export const TaskProgressStatusType = {
  NOT_YET: '未着手',
  DOING: '着手中',
  IN_REVIEW: 'レビュー中',
  DONE: '完了',
} as const;

export type TaskProgressStatusType =
  typeof TaskProgressStatusType[keyof typeof TaskProgressStatusType];

export class TaskProgressStatus extends ValueObject<string> {
  public makeStatusNext() {
    switch (this.value) {
      case TaskProgressStatusType.NOT_YET:
        return new TaskProgressStatus(TaskProgressStatusType.DOING);
      case TaskProgressStatusType.DOING:
        return new TaskProgressStatus(TaskProgressStatusType.IN_REVIEW);
      case TaskProgressStatusType.IN_REVIEW:
        return new TaskProgressStatus(TaskProgressStatusType.DONE);
      case TaskProgressStatusType.DONE:
        throw new DomainException('既に課題は「完了」済みです。');
      default:
        throw new DomainException('不正な値が指定されています。');
    }
  }

  public makeStatusBack() {
    switch (this.value) {
      case TaskProgressStatusType.NOT_YET:
        throw new DomainException('「未着手」以前の状態に変更できません。');
      case TaskProgressStatusType.DOING:
        return new TaskProgressStatus(TaskProgressStatusType.NOT_YET);
      case TaskProgressStatusType.IN_REVIEW:
        return new TaskProgressStatus(TaskProgressStatusType.DOING);
      case TaskProgressStatusType.DONE:
        throw new DomainException('「完了」から以前の状態に変更できません。');
      default:
        throw new DomainException('不正な値が指定されています。');
    }
  }

  public isDone() {
    return this.value === TaskProgressStatusType.DONE;
  }

  /**
   * 「未着手」状態の進捗ステータスのインスタンスを生成する
   *
   * @returns 「未着手」状態の進捗ステータス
   */
  public static create(): TaskProgressStatus {
    const defaultStatus = TaskProgressStatusType.NOT_YET;

    return new TaskProgressStatus(defaultStatus);
  }
}
