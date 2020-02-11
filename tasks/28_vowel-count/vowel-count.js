export const getVowelCount = str => {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
};
