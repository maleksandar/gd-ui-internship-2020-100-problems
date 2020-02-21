export function findLongestWord(str) {
  /* Splits string into words array and than find
    the longest word in the array  with reduce */
  return str.split(' ')
      .reduce((max, curr) => curr.length > max.length? curr : max, '').length;
}
