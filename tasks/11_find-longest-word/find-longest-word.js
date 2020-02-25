export function findLongestWord(str) {
  let strSplit = str.split(' ');
  let lengthOfLongestWord = 0;

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].length > lengthOfLongestWord) {
      lengthOfLongestWord = strSplit[i].length;
    }
  }

  return lengthOfLongestWord;
}
