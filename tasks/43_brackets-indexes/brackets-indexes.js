export function findCloseIndex(array, indexOfOpeningBracket) {
  if (indexOfOpeningBracket > array.length
        || array[indexOfOpeningBracket] !== '(') {
    return -1;
  }

  let numOfBrackets = 1;

  for (let i = indexOfOpeningBracket + 1; i < array.length; i++) {
    if (array[i] === '(') {
      numOfBrackets++;
    }

    if (array[i] === ')') {
      numOfBrackets--;
    }

    if (numOfBrackets === 0) {
      return i;
    }
  }
}
