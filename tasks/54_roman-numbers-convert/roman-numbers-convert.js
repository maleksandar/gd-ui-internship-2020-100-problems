export function convertToRoman(number) {
  let romanNumber = '';

  const romanValues = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };

  Object.keys(romanValues).forEach((romanSymbol) => {
    const numberOfRepeats = Math.floor(number / romanValues[romanSymbol]);
    number = number % romanValues[romanSymbol];
    romanNumber += romanSymbol.repeat(numberOfRepeats);
  });

  return romanNumber;
}
