export const getNumbers = (string) => {
  return string.match(/\d+/g).map((item) => parseInt(item));
};
