export const binaryDecode = (string) => {
  if (string === undefined) {
    return '';
  }

  const parsedString = string.split(' ').map((char) => parseInt(char, 2));
  return String.fromCharCode(...parsedString);
};
