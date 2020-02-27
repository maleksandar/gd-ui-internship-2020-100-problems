export function myReplace(sentence, searchWord, replaceWord) {
  return sentence.replace(searchWord, (matchedWord) => {
    const firstChar = matchedWord.charAt(0);
    if (isUpper(firstChar)) {
      return capitalize(replaceWord);
    }
    return replaceWord;
  });
}

function capitalize(word) {
  return word.charAt(0).toUpperCase()
    + word.slice(1);
}

function isUpper(character) {
  return character === character.toUpperCase();
}

