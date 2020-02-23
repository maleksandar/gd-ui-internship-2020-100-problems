export const findCloseIndex = (str, pos) => {
  if (str[pos] !== "(") {
    throw new Error("The position must contain an opening bracket!");
  }
  let level = 1;
  for (let i = pos + 1; i < str.length; i++) {
    if (str[i] === "(") {
      level++;
    } else if (str[i] === ")") {
      level--;
    }

    if (level === 0) {
      return i;
    }
  }
  return -1;
};
