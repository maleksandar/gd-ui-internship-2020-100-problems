/**
 * @param {number} number
 * @return {number}
 * @description "Returns sum of all the prime numbers
 * up to and including the provided number."
 */

export function sumPrimes(number) {
  let sum = 0;

  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (!(number % i)) {
      return false;
    }
  }
  return true;
}
