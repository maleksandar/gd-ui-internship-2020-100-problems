/**
 * @param {Array<number>} [from, to]
 * @return {number}
 * @description "Returns the smallest common multiple of numbers."
 */

export function smallestCommons([from, to]) {
  if (from > to) {
    [from, to] = [to, from];
  }

  let smallestCommonMultiple = from;

  for (let i = from + 1; i <= to; i++) {
    smallestCommonMultiple = (i * smallestCommonMultiple)
      / greatestCommonDivisor(i, smallestCommonMultiple);
  }

  return smallestCommonMultiple;
}

function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}
