export const findCloseIndex = (string, index) => {
  if (string[index] !== '(') {
    return -1;
  }

  let stack = [];

  for (let i = index + 1; i < string.length; i++) {
    if (string[i] === '(') {
      stack.push('(');
    } else if (string[i] === ')') {
      if (stack.length === 0) {
        return i;
      }

      stack.pop();
    }
  }

  return -1;
};
