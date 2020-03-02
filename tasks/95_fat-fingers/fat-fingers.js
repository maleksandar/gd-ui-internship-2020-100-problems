export const fatFingers = (string) => {
  let result = '';
  let capsLock = false;

  if (string.length < 1) {
    return '';
  }

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (isLetterA(letter)) {
      capsLock = !capsLock;
    } else {
      if (capsLock) {
        result += swapCase(letter);
      } else {
        result += letter;
      }
    }
  }

  return result;
};

const isLetterA = (char) => char === 'a' || char === 'A';
const isLowerCase = (char) => char.toLowerCase() === char;
const swapCase = (char) => {
  return isLowerCase(char) ? char.toUpperCase() : char.toLowerCase();
};
