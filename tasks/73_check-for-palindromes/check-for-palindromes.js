export const palindrome = str => {
  let splittedStr = str
    .toLowerCase()
    .split(/[^A-Za-z0-9]/gi)
    .join("");
  let filteredStr = splittedStr.split("");
  return filteredStr.join("") === filteredStr.reverse().join("");
};
