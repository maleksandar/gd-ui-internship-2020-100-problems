/**
 * @param {number} n
 * @return {number}
 * @description "Calculate primorial of a number - n prime numbers multiplied."
 */

export function numPrimorial(n) {
  let primorial = 1;
  let numberOfPrimes = 0;
  for (let i = 2; numberOfPrimes < n; i++) {
    if (isPrime(i)) {
      primorial *= i;
      numberOfPrimes++;
    }
  }

  return primorial;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}
