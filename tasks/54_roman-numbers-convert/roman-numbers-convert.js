export const convertToRoman = (number) => {
  let result = '';
  const ROMAN_TABLE = {
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

  for (let i of Object.keys(ROMAN_TABLE)) {
    const quotient = Math.floor(number / ROMAN_TABLE[i]);
    number -= quotient * ROMAN_TABLE[i];
    result += i.repeat(quotient);
  }

  return result;
};
