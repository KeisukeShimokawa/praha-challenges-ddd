import { ValueObject } from 'src/domain/shared/ValueObject';

export class TaskDescription extends ValueObject<string, 'TaskDescription'> {
  public static create(descriptopn: string): TaskDescription {
    return new TaskDescription(descriptopn);
  }
}
