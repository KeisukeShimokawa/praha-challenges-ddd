import { nanoid } from 'nanoid';
import { ValueObject } from './ValueObject';

export abstract class Identifier<U extends string> extends ValueObject<
  string,
  U
> {
  protected constructor(id?: string) {
    super(id ? id : nanoid());
  }
}
