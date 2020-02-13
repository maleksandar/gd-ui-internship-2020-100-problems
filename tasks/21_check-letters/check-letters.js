export function checkLetters([firstArray, secondArray]) {
  return secondArray
      .toLowerCase()
      .split('')
      .reduce((acc, character) => {
        return acc && isCharacterContainedInArray(character, firstArray);
      }, true);

  function isCharacterContainedInArray(character, array) {
    return array.toLowerCase().indexOf(character) !== -1;
  }
}

