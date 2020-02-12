export function findLongestWord(sentence) {
  return sentence
      .split(' ')
      .reduce((acc, currentWord) => {
        return (acc.length > currentWord.length ? acc : currentWord);
      })
      .length;
}
