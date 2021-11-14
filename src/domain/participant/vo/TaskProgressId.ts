import { Identifier } from '../../shared/Identifier';

export class TaskProgressId extends Identifier {
  public static create(id?): TaskProgressId {
    return new TaskProgressId(id);
  }
}
