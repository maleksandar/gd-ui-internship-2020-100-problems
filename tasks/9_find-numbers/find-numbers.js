export const getNumbers = (str) => {
  return (str.match(/\d+/g)).map(Number);
}
