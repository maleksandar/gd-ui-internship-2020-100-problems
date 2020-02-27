export const validBraces = (braces) => {
  const BRACES_PAIR = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  let stack = [];

  for (let i = 0; i < braces.length; i++) {
    const curr = braces[i];

    if (BRACES_PAIR[curr]) {
      stack.push(curr);
    } else {
      if (curr !== BRACES_PAIR[stack.pop()]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};
