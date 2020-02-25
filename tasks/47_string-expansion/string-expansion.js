export function stringExpansion(str) {
  if (str === '') {
    return '';
  }

  let newString = '';
  let number = 1;

  for (let i = 0; i < str.length; i++) {
    let currentChar = str[i];
    if (isFinite(currentChar)) {
      number = parseInt(currentChar);
    } else {
      newString += currentChar.repeat(number);
    }
  }

  return newString;
}
