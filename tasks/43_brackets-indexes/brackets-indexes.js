export const findCloseIndex = (str, pos) => {
  let openBracketCount = 0;
  let givenBracketPosition = -1;
  let index = -1;
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (char === "(") {
      openBracketCount++;
      if (i === pos) {
        givenBracketPosition = openBracketCount;
      }
    } else if (char === ")") {
      if (openBracketCount === givenBracketPosition) {
        index = i;
        break;
      }
      openBracketCount--;
    }
  }
  return index;
};
