import { Identifier } from '../shared/Identifier';

export class TaskId extends Identifier<'TaskId'> {
  constructor(id?: string) {
    super(id);
  }
}
