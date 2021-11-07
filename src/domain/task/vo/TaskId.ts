import { Identifier } from '../../shared/Identifier';

export class TaskId extends Identifier {
  public static create(id?): TaskId {
    return new TaskId(id);
  }
}
