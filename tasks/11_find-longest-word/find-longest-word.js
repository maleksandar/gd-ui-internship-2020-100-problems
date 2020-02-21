export function findLongestWord(sentence) {
  const wordLens = sentence.split(' ').map((word) => word.length);
  return Math.max(...wordLens);
}
