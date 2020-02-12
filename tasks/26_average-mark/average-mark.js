export function getAverage(array) {
  let sum = array.reduce((acc, num) => acc + num, 0);
  return Math.floor(sum / array.length);
}
