export function myReplace(sentence, searchWord, replaceWord) {
  return sentence.replace(searchWord, (matchedWord) => {
    let firstChar = matchedWord.charAt(0);
    if (isUpper(firstChar)) {
      return replaceWord.charAt(0).toUpperCase()
                + replaceWord.slice(1);
    }

    return replaceWord;
  });
}
function isUpper(character) {
  return character === character.toUpperCase();
}

