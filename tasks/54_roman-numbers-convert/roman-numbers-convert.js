export function convertToRoman(num) {
  const romanNumeralsDict = {
    '1': 'I',
    '4': 'IV',
    '5': 'V',
    '9': 'IX',
    '10': 'X',
    '40': 'XL',
    '50': 'L',
    '90': 'XC',
    '100': 'C',
    '400': 'CD',
    '500': 'D',
    '900': 'CM',
    '1000': 'M',
  };

  const digitArray = num.toString().split('');
  const digArrLen = digitArray.length;
  return digitArray.map((digit, i) => {
    const numberLength = digArrLen - i;
    if (digit > 0 && digit < 4) {
      return romanNumeralsDict['1'.padEnd(numberLength, '0')].repeat(+digit);
    } else if (digit > 5 && digit < 9) {
      return romanNumeralsDict['5'.padEnd(numberLength, '0')] +
        romanNumeralsDict['1'.padEnd(numberLength, '0')].repeat(+digit - 5);
    } else {
      return romanNumeralsDict[digit.padEnd(numberLength, '0')];
    }
  }).join('');
}

