import { NextFunction, Request, Response } from 'express';
import { APIError } from '../utils/custom-error';
import { ERROR_MESSAGES } from '../utils/error-messages';

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
    .send(err.message || ERROR_MESSAGES.INTERNAL_ERROR);
};
