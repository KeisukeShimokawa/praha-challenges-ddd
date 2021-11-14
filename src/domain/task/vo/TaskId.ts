import { Identifier } from '../../shared/Identifier';

export class TaskId extends Identifier {
  public static create(id?: string): TaskId {
    return new TaskId(id);
  }
}
