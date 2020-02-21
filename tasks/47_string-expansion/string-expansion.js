export const stringExpansion = (string) => {
  if (string === '' || !containsNumber(string)) {
    return string;
  }

  let digit = 0;
  let res = [];

  for (let i = 0; i < string.length; i++) {
    const currChar = string[i];

    if (isCharNumber(currChar)) {
      digit = Number(currChar);
    } else {
      res.push(currChar.repeat(digit));
    }
  }

  return res.join('');
};

const containsNumber = (string) => {
  return /\d/.test(string);
};

const isCharNumber = (char) => {
  return char >= '0' && char <= '9';
};
