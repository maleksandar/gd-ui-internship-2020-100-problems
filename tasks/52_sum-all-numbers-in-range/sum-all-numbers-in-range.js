export function sumAll(range) {
  let sumOfRange = 0;

  for (let i = Math.min(range[0], range[1]);
    i <= Math.max(range[0], range[1]); i++) {
    sumOfRange += i;
  }

  return sumOfRange;
}
