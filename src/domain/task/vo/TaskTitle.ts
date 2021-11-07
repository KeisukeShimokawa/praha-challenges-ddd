import { DomainException } from '../../shared/DomainException';
import { ValueObject } from '../../shared/ValueObject';

export class TaskTitle extends ValueObject<string> {
  public static create(name: string): TaskTitle {
    if (!name) {
      throw new DomainException('課題のタイトルが設定されていません。');
    }

    return new TaskTitle(name);
  }
}
