import { Identifier } from '../../shared/Identifier';

export class TaskId extends Identifier<'TaskId'> {
  public static create(id?): TaskId {
    return new TaskId(id);
  }
}
