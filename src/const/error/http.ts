export abstract class Http extends Error {
  status: number;
  message: string;

  protected constructor(status: number, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}
