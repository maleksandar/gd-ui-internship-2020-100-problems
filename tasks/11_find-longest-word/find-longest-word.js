export const findLongestWord = (string) => {
  // Empty string as a initial value for the second argument
  return string.split(' ').reduce((longest, currentWord) => {
    return currentWord.length > longest.length ? currentWord : longest;
  }, '').length;
};
