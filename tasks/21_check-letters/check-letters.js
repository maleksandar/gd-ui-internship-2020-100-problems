export function checkLetters([firstArray, secondArray]) {
  return secondArray
      .toLowerCase()
      .split('')
      .reduce((acc, item) => {
        return acc && (firstArray.toLowerCase().indexOf(item) !== -1);
      }, true);
}

