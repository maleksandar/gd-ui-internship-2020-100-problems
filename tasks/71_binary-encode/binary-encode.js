export const binaryEncode = (string) => {
  if (string === undefined) {
    return '';
  }

  const parsedString = string.split('').map((char) => charToBinary(char));
  return parsedString.join(' ');
};

const charToBinary = (char) => {
  return char.charCodeAt(0).toString(2).padStart(8, '0');
};
