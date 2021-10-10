import { ValueObject } from 'src/domain/shared/ValueObject';

export class TaskTitle extends ValueObject<string, 'TaskName'> {
  public static create(name: string): TaskTitle {
    if (!name) {
      throw new Error('課題のタイトルが設定されていません。');
    }

    return new TaskTitle(name);
  }
}
