export function checkLetters([firstString, secondString]) {
  return convertToArray(secondString)
      .every((character) => {
        return isCharacterContainedInArray(character, firstString);
      });

  function convertToArray(string) {
    return string.toLowerCase().split('');
  }

  function isCharacterContainedInArray(character, array) {
    return array.toLowerCase().indexOf(character) !== -1;
  }
}

