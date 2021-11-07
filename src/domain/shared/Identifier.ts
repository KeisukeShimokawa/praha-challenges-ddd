import { nanoid } from 'nanoid';
import { ValueObject } from './ValueObject';

export abstract class Identifier extends ValueObject<string> {
  protected constructor(id?: string) {
    super(id ? id : nanoid());
  }
}
