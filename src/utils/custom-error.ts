export class APIError extends Error {
  statusCode: number;

  constructor(message: string, status: number) {
    super(message);
    this.statusCode = status;
    this.name = this.constructor.name;

    // Set the prototype chain for instanceof checks
    Object.setPrototypeOf(this, APIError.prototype);
  }
}
