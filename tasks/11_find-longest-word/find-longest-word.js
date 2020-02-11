export function findLongestWord(str) {
  return str.split(' ')
      .reduce((max, curr) => curr.length > max.length? curr : max, '').length;
}
