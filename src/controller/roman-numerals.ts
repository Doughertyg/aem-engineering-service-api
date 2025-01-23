import { NextFunction, Response, Request } from "express";
import {v4 as uuidv4 } from 'uuid';

/**
 * Method that handles requests to the roman numeral endpoint and converts number inputs to roman numerals
 */
export const getRomanNumerals = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const correlationId = uuidv4();
  const logPrefix = `get_roman_numerals API - correlationId: ${correlationId} inputNumber: ${req.query.query} `;

  try {
    // do the thing
    res.send('IV').status(200); // TODO: change
  } catch (err) {
    // handle the error
    next(err);
  }
}
