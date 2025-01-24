const INTEGER_TO_BASE_ROMAN_NUMERAL_MAP: {
  [index: number]: string
} = {
  1: 'I',
  4: 'IV',
  5: 'V',
  9: 'IX',
  10: 'X',
  40: 'XL',
  50: 'L',
  90: 'XC',
  100: 'C',
  400: 'CD',
  500: 'D',
  900: 'CM',
  1000: 'M'
}

/**
 * Util fn that converts an integer number into a roman numeral using the standard form: https://en.wikipedia.org/wiki/Roman_numerals
 * The input string represents a valid integer from 1 to 3999. Because it is a string it can be a value such as: "3.00000000"
 * Rules:
 *  1. range is 1 to 3999
 *  2. use the subtractive notation where a smaller symbol is placed in front of a larger one and subtracted from it. Ex.: 4 => IV (5 (aka V) minus 1 (aka I))
 *  3. no symbol should repeat more than 3 times consecutively (because of subtractive notation)
 *  4. a number containing two or more decimal digits is built by appending the Roman numeral equivalent for each, from highest to lowest
 *  5. there is no symbol for zero and this digit is omitted (ex.: 207 = CC + VII = CCVII)
 * @param string representation of a valid integer between 1 and 3999
 * @returns string representation of the input number as a roman numeral
 */
export const convertNumberToRomanNumeral = (
  inputNumber: string
): string => {
  // The input string represents a valid integer from 1 to 3999 but because it is a string a value "3.00000000" would still be valid. We only want the digits to the left of the decimal:
  let integerString = inputNumber.split('.')[0];

  // base case
  if (integerString === '0') return '';

  // base case
  if (INTEGER_TO_BASE_ROMAN_NUMERAL_MAP[Number(integerString)]) {
    return INTEGER_TO_BASE_ROMAN_NUMERAL_MAP[Number(integerString)];
  }

  // the base power of 10 for this number:
  const base = 10 ** (integerString.length - 1);
  const halfBase = base * 5;
  const baseValue = base * Number(integerString[0]);

  if (INTEGER_TO_BASE_ROMAN_NUMERAL_MAP[baseValue]) {
    return INTEGER_TO_BASE_ROMAN_NUMERAL_MAP[baseValue] + convertNumberToRomanNumeral(String(Number(integerString) - baseValue));
  }

  return (
    baseValue > halfBase
  ) ? (
    convertNumberToRomanNumeral(String(Number(integerString) - base)) + INTEGER_TO_BASE_ROMAN_NUMERAL_MAP[base]
  ) : (
    INTEGER_TO_BASE_ROMAN_NUMERAL_MAP[base] + convertNumberToRomanNumeral(String(Number(integerString) - base))
  );
};
