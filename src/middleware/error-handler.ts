import { NextFunction, Request, Response } from 'express';
import { APIError } from '../utils/custom-error';

/**
 * Middleware for handling errors in the server
 */
export const errorHandlerMiddleware = (
  err: APIError,
  req: Request,
  res: Response,
  nect: NextFunction,
) => {
  // log the error

  res
    .status(err.statusCode || 500)
    .send(err.message || 'Internal Server Error');
};
