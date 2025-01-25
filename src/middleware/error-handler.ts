import { NextFunction, Request, Response } from 'express';
import { APIError } from '../utils/custom-error';
import { ERROR_MESSAGES } from '../utils/error-messages';
import createLogger from '../utils/logger';

const logger = createLogger();

/**
 * Middleware for handling errors in the server
 */
export const errorHandlerMiddleware = (
  err: APIError,
  req: Request,
  res: Response,
  nect: NextFunction,
) => {
  logger.error(`Error in the middleware: ${err.message ?? 'Error'}`)

  res
    .status(err.statusCode || 500)
    .send(err.message || ERROR_MESSAGES.INTERNAL_ERROR);
};
