import { NextFunction, Request, Response } from "express";
import { APIError } from "../utils/custom-error";
import { MAX_NUMBER_INPUT, MIN_NUMBER_INPUT } from "../utils/constants";
import { ERROR_MESSAGES } from "../utils/error-messages";

/**
 * Middleware function to validate input is a valid integer and conforms to the input requirements
 */
export const validateIntegerInput = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const input = req.query.query;

  if (!input || !Number.isInteger(Number(input))) {
    return next(new APIError(ERROR_MESSAGES.INVALID_INPUT, 400));
  }

  // due to floating point precision limitations the number 5.0000000000000001 will evaluate to true above: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
  // so here we have to manually check for this case using string manipulation. All valid integers can only have zeros after the decimal
  const decimals = (input as string).split('.');
  const isFloatingPointPrecisionError = decimals.length > 1 && decimals[1] !== ''.padEnd(decimals[1]?.length, '0');

  if (isFloatingPointPrecisionError) {
    return next(new APIError(ERROR_MESSAGES.INVALID_INPUT, 400));
  }

  if (Number(input) < MIN_NUMBER_INPUT || Number(input) > MAX_NUMBER_INPUT) {
    return next(new APIError(ERROR_MESSAGES.INVALID_INPUT, 400));
  }

  // the input has passed validation and the request can continue
  return next()
}
