export const swapCases = str => {
  let result = str
    .split("")
    .map(letter => {
      return letter === letter.toUpperCase()
        ? letter.toLowerCase()
        : letter.toUpperCase();
    })
    .join("");
  return result;
};
