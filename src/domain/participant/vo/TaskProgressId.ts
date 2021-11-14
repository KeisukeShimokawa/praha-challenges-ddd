import { Identifier } from '../../shared/Identifier';

export class TaskProgressId extends Identifier {
  public static create(id?: string): TaskProgressId {
    return new TaskProgressId(id);
  }
}
