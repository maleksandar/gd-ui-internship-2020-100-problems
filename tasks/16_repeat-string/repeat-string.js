export function repeatStringNumTimes(str, num) {
  let resString = '';
  while (num > 1) {
    resString += str;
    num--;
  }
  return resString;
}
