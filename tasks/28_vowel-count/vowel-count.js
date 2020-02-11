export function getVowelCount(str) {
  return [].reduce.call(str, (count, curr) => {
    if (curr === 'a' || curr === 'e' ||
           curr === 'i' || curr === 'o' ||
           curr === 'u') {
      return ++count;
    }
    return count;
  }, 0);
}
