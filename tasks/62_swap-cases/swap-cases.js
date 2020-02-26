export const swapCases = (string) => {
  let result = string.split('');

  for (let i = 0; i < result.length; i++) {
    if (isUpper(string[i])) {
      result[i] = string[i].toLowerCase();
    } else {
      result[i] = string[i].toUpperCase();
    }
  }

  return result.join('');
};

// Alternative solution using map()
export const swapCases2 = (string) => {
  return string.split('')
      .map((char) => isUpper(char) ? char.toLowerCase() : char.toUpperCase())
      .join('');
};

const isUpper = (char) => {
  return char >= 'A' && char <= 'Z';
};
