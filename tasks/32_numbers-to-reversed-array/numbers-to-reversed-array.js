export function numberToReversedArray(num) {
  let arr = [];
  while (num !== 0) {
    arr.push(num % 10);
    num = Math.trunc(num / 10);
  }
  return arr;
}
