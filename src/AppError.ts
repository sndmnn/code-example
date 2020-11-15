import GenericReport from './GenericReport';

class AppError extends Error {
  public readonly internalCode: number | undefined;

  public readonly httpCode: number;

  public readonly message: string;

  constructor(httpCode: number, message: string, internalCode?: number) {
    super();
    this.internalCode = internalCode;
    this.message = message;
    this.httpCode = httpCode;
  }

  public generateReport(): GenericReport {
    return {
      code: this.internalCode,
      message: this.message,
    };
  }
}

export default AppError;
