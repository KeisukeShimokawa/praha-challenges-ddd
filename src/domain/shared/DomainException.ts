export class DomainException extends Error {
  // privateプロパティを設けて公称型に変更する
  private _: never;

  constructor(message?: string) {
    super(message);
  }
}
