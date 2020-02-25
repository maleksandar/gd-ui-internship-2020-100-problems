export function findCloseIndex(string, position) {
  if (string[position] !== '(') {
    return -1;
  }

  let numOfOpenBrackets = 1;

  for (let i = position + 1; i < string.length; i++) {
    if (string[i] === '(') {
      numOfOpenBrackets++;
    } else if (string[i] === ')') {
      numOfOpenBrackets--;
    }

    if (numOfOpenBrackets === 0) {
      return i;
    }
  }

  return -1;
}

