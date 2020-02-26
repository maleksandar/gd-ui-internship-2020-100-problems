export const binaryDecode = str => {
  if (str === undefined) {
    return "";
  }
  return String.fromCharCode(
    ...str.split(" ").map(char => {
      return parseInt(char, 2);
    })
  );
};
