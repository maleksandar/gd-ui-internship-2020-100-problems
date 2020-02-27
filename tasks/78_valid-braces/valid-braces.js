export function validBraces(str) {
  const bracketPairs = {
    ')': '(',
    ']': '[',
    '}': '{',
  };
  const openBrackets = [];
  for (let i = 0; i < str.length; i++) {
    if (isOpeningBracket(str[i])) {
      openBrackets.push(str[i]);
    } else if (isClosingBracket(str[i])) {
      if (openBrackets.pop() !== bracketPairs[str[i]]) {
        return false;
      }
    }
  }
  return openBrackets.length === 0;
}

function isOpeningBracket(char) {
  return char === '(' || char === '[' || char === '{';
}
function isClosingBracket(char) {
  return char === ')' || char === ']' || char === '}';
}
