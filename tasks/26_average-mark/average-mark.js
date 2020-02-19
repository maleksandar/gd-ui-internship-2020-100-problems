
export function getAverage(array) {
  let sum = array.reduce((acc, val) => acc + val, 0);

  return Math.round(sum / array.length);
}
