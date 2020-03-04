/**
 * @param {Array<numbers>} array
 * @return {number}
 * @description "Calculates the sum of elements on prime-numbered indices."
 */

export function sumPrimeIndexedElements(array) {
  return array
      .filter((number, index) => isPrime(index))
      .reduce((sum, number) => sum + number, 0);
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
