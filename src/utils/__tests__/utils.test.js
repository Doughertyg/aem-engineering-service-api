const { convertNumberToRomanNumeral } = require('../roman-numerals-util');

const INTEGERS_AND_VALID_NUMERALS = [
  {
    in: '1',
    out: 'I'
  },
  {
    in: '3',
    out: 'III'
  },
  {
    in: '4',
    out: 'IV'
  },
  {
    in: '5',
    out: 'V'
  },
  {
    in: '7',
    out: 'VII'
  },
  {
    in: '9',
    out: 'IX'
  },
  {
    in: '10',
    out: 'X'
  },
  {
    in: '12',
    out: 'XII'
  },
  {
    in: '14',
    out: 'XIV'
  },
  {
    in: '15',
    out: 'XV'
  },
  {
    in: '17',
    out: 'XVII'
  },
  {
    in: '19',
    out: 'XIX'
  },
  {
    in: '20',
    out: 'XX'
  },
  {
    in: '23',
    out: 'XXIII'
  },
  {
    in: '24',
    out: 'XXIV'
  },
  {
    in: '25',
    out: 'XXV'
  },
  {
    in: '28',
    out: 'XXVIII'
  },
  {
    in: '29',
    out: 'XXIX'
  },
  {
    in: '30',
    out: 'XXX'
  },
  {
    in: '34',
    out: 'XXXIV'
  },
  {
    in: '39',
    out: 'XXXIX'
  },
  {
    in: '40',
    out: 'XL'
  },
  {
    in: '43',
    out: 'XLIII'
  },
  {
    in: '44',
    out: 'XLIV'
  },
  {
    in: '49',
    out: 'XLIX'
  },
  {
    in: '50',
    out: 'L'
  },
  {
    in: '59',
    out: 'LIX'
  },
  {
    in: '60',
    out: 'LX'
  },
  {
    in: '64',
    out: 'LXIV'
  },
  {
    in: '70',
    out: 'LXX'
  },
  {
    in: '80',
    out: 'LXXX'
  },
  {
    in: '84',
    out: 'LXXXIV'
  },
  {
    in: '89',
    out: 'LXXXIX'
  },
  {
    in: '90',
    out: 'XC'
  },
  {
    in: '99',
    out: 'XCIX'
  },
  {
    in: '100',
    out: 'C'
  },
  {
    in: '103',
    out: 'CIII'
  },
  {
    in: '104',
    out: 'CIV'
  },
  {
    in: '109',
    out: 'CIX'
  },
  {
    in: '110',
    out: 'CX'
  },
  {
    in: '115',
    out: 'CXV'
  },
  {
    in: '120',
    out: 'CXX'
  },
  {
    in: '123',
    out: 'CXXIII'
  },
  {
    in: '129',
    out: 'CXXIX'
  },
  {
    in: '154',
    out: 'CLIV'
  },
  {
    in: '178',
    out: 'CLXXVIII'
  },
  {
    in: '199',
    out: 'CXCIX'
  },
  {
    in: '200',
    out: 'CC'
  },
  {
    in: '207',
    out: 'CCVII'
  },
  {
    in: '242',
    out: 'CCXLII'
  },
  {
    in: '299',
    out: 'CCXCIX'
  },
  {
    in: '300',
    out: 'CCC'
  },
  {
    in: '350',
    out: 'CCCL'
  },
  {
    in: '400',
    out: 'CD'
  },
  {
    in: '424',
    out: 'CDXXIV'
  },
  {
    in: '500',
    out: 'D'
  },
  {
    in: '509',
    out: 'DIX'
  },
  {
    in: '567',
    out: 'DLXVII'
  },
  {
    in: '600',
    out: 'DC'
  },
  {
    in: '900',
    out: 'CM'
  },
  {
    in: '990',
    out: 'CMXC'
  },
  {
    in: '1000',
    out: 'M'
  },
  {
    in: '1989',
    out: 'MCMLXXXIX'
  },
  {
    in: '3999',
    out: 'MMMCMXCIX'
  }
];

test('Test that the convertNumberToRomanNumeral method returns correct roman numerals', () => {
  INTEGERS_AND_VALID_NUMERALS.every(value => {
    expect(convertNumberToRomanNumeral(value.in)).toEqual(value.out);
  });
});

test('Test that the convertNumberToRomanNumeral util method can handle integers with extra zeroes', () => {
  expect(convertNumberToRomanNumeral('3.000')).toEqual('III');
  expect(convertNumberToRomanNumeral('24.0000000')).toEqual('XXIV');
  expect(convertNumberToRomanNumeral('523.000000000000000000000')).toEqual('DXXIII');
})
