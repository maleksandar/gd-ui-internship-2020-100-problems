/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 * @description "Returns the largest number obtained after inserting
 * the operators *, + and brackets."
 */

export function expressionMatter(a, b, c) {
  const results = [];
  results.push(a + b + c);
  results.push(a * b * c);
  results.push((a + b) * c);
  results.push(a * (b + c));
  results.push((a * b) + c);
  results.push(a + (b * c));
  return Math.max(...results);
}
