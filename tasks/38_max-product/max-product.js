/**
 * @param {Array<number>} array
 * @return {number}
 */

export function maxProduct(array) {
  const n = array.length;
  const firstMultipliers = array.slice(0, n-1);
  const secondMultipliers = array.slice(1, n);

  const neighbors = firstMultipliers.map((num, index) => {
    const num1 = secondMultipliers[index];
    const num2 = num;
    return [num1, num2];
  });

  const products = neighbors.map(([num1, num2]) => num1 * num2);

  return Math.max(...products);
}
