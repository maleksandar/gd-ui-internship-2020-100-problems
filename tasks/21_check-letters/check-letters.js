export function checkLetters([firstString, secondString]) {
  return convertToArray(secondString)
      .reduce((acc, character) => {
        return acc && isCharacterContainedInArray(character, firstString);
      }, true);

  function convertToArray(string) {
    return string.toLowerCase().split('');
  }

  function isCharacterContainedInArray(character, array) {
    return array.toLowerCase().indexOf(character) !== -1;
  }
}

