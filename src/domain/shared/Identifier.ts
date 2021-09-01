import { nanoid } from 'nanoid';
import { ValueObject } from './ValueObject';

export class Identifier<U extends string> extends ValueObject<string, U> {
  constructor(id?: string) {
    super(id ? id : nanoid());
  }
}
