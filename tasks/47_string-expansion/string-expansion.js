export function stringExpansion(str) {
  let repeatTimes = 1;
  let newString = '';
  for (let i = 0; i < str.length; i++) {
    if (!isNaN(str[i])) {
      repeatTimes = str[i];
    } else {
      newString += str[i].repeat(repeatTimes);
    }
  }
  return newString;
}
