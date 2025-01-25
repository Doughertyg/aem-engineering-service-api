import { NextFunction, Response, Request } from 'express';
import { v4 as uuidv4 } from 'uuid';
import { convertNumberToRomanNumeral } from '../utils/roman-numerals-util';
import createLogger from '../utils/logger';

const logger = createLogger();

/**
 * Method that handles requests to the roman numeral endpoint and converts number inputs to roman numerals
 */
export const getRomanNumerals = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const correlationId = uuidv4();
  const logPrefix = `get_roman_numerals API - correlationId: ${correlationId} inputNumber: ${req.query.query} `;

  try {
    logger.info(`${logPrefix} starting Request`);
    logger.profile('get_roman_numerals');
    const romanNumeral = convertNumberToRomanNumeral(req.query.query as string);
    logger.profile('get_roman_numerals');
    res.send({ input: req.query.query, output: romanNumeral }).status(200);
  } catch (err: any) {
    logger.error(`${logPrefix} Call failed with error: ${err.message ?? 'Error'}`)
    next(err);
  }
};
