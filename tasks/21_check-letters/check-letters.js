export function checkLetters(arr) {
  const letters = arr[0].toLowerCase();
  const searchWord = arr[1].toLowerCase();
  for (let i = 0; i < searchWord.length; i++) {
    if (letters.indexOf(searchWord[i]) === -1) return false;
  }
  return true;
}
