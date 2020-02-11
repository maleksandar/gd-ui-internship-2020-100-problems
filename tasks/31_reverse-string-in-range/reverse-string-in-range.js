export const reverseStringInRange = (str, fromTo) => {
  let newStr = str.substring(fromTo[0], fromTo[1] + 1);
  let newest = newStr
    .split("")
    .reverse()
    .join("");
  let endingStr = "";
  for (let i = 0; i < fromTo[0]; i++) {
    endingStr += str[i];
  }
  endingStr += newest;
  for (let i = fromTo[1] + 1; i < str.length; i++) {
    endingStr += str[i];
  }

  return endingStr;
};
