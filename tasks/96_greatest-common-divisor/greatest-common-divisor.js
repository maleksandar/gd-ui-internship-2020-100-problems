/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 * @description "Calculates greatest common divisor of given numbers."
 */
export function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}
