export function sumPrimes(number) {
  let sumOfPrimes = 0;
  for (let i = 2; i <= number; i++) {
    if (isPrime(i)) {
      sumOfPrimes += i;
    }
  }
  return sumOfPrimes;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
