import { NextFunction, Request, Response } from 'express';

import AppError from './AppError';

function errorHandler(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction,
): Response {
  console.log(Object.getPrototypeOf(err));

  if (err instanceof AppError) {
    const report = err.generateReport();

    return response.status(err.httpCode).json(report);
  }

  return response.status(500).json(err);
}

export default errorHandler;
