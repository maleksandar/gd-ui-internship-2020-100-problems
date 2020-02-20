
export function findCloseIndex(string, index) {
  if (string[index] != '(') return -1;
  let unclosedBrackets = 1;
  while (unclosedBrackets != 0) {
    index++;
    if (string[index] === '(') unclosedBrackets++;
    else if (string[index] === ')') unclosedBrackets--;
  }

  return unclosedBrackets === 0 ? index : -1;
}
