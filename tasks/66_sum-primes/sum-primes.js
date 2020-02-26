export const sumPrimes = (number) => {
  if (number < 2) {
    return 0;
  }

  let result = 2;

  // Iterate over only odd numbers because
  // all prime numbers are odd except number 2
  for (let i = 3; i <= number; i += 2) {
    if (isPrime(i)) {
      result += i;
    }
  }

  return result;
};

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }

  if (n <= 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};
