/**
 * @param (string) brackets
 * @return {boolean}
 * @description "Checks if the order of the braces is valid."
 */

const openingBrackets = ['[', '{', '('];
const closingBrackets = [']', '}', ')'];

export function validBraces(brackets) {
  const stack = [];

  for (let i = 0; i < brackets.length; i++) {
    const bracket = brackets[i];

    if (isClosingBracket(bracket)) {
      if (stack.length === 0 || bracketsDontMatch(stack, bracket)) {
        return false;
      }
    } else {
      stack.push(bracket);
    }
  }

  return (stack.length === 0);
}

function bracketsDontMatch(stack, bracket) {
  return stack.pop() !== openingBrackets[closingBrackets.indexOf(bracket)];
}

function isClosingBracket(bracket) {
  return closingBrackets.indexOf(bracket) !== -1;
}

