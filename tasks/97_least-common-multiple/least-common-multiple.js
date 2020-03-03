/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * @description "Calculates least common multiple of given numbers."
 */
export function leastCommonMultiple(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}

function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}
