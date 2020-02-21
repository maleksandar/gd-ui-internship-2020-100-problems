export const findLongestWord = sentence => {
  const newSen = sentence.replace(".", "");
  newSen.split(" ");
  let longestWord = 0;
  words.forEach(word => {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  });

  return longestWord;
};
