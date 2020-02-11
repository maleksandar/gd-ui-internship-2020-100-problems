export const findLongestWord = (sentence) => {
  const words = sentence.split(" ");
  let longestWord = 0;
  words.forEach(word => {
    if(word.length > longestWord){
      longestWord = word.length;
    }
  });

  return longestWord;
}