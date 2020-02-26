export const spinalCase = (string) => {
  // \s matches any whitespace character
  // _ matches the character _ literally
  // Positive Lookahead: Match a single character present in the list [A-Z]
  return string.split(/\s|_|(?=[A-Z])/g).join('-').toLowerCase();
};
