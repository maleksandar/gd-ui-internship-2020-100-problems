export function getAverage(arr) {
  return Math.round(arr.reduce((res, curr) => res+=curr, 0) / arr.length);
}
