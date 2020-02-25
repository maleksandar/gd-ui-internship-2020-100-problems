export const findLetter = (string) => {
  for (let i = 0; i < string.length; i++) {
    const code = string.charCodeAt(i);

    if (code !== string.charCodeAt(0) + i) {
      return String.fromCharCode(code - 1);
    }
  }

  return undefined;
};

// Alternative solution
export const findLetter2 = (string) => {
  for (let i = 0; i < string.length - 1; i++) {
    const code = string.charCodeAt(i);

    if (string.charCodeAt(i + 1) - code !== 1) {
      return String.fromCharCode(code + 1);
    }
  }

  return undefined;
};
