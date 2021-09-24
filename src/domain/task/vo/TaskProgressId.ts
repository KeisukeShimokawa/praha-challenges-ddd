import { Identifier } from 'src/domain/shared/Identifier';

export class TaskProgressId extends Identifier<'TaskProgressId'> {
  public static create(id?): TaskProgressId {
    return new TaskProgressId(id);
  }
}
