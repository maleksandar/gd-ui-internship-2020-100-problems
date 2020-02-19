export const getAverage = (arr) => {
  return Math.floor(arr.reduce((a, b) => a + b, 0) / arr.length);
};
