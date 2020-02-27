export const sumPrimeIndexedElements = (arr) => {
  if (arr === undefined || arr.length < 3) {
    return 0;
  }

  let sum = arr[2];

  for (let i = 3; i < arr.length; i += 2) {
    if (isPrime(i)) {
      sum += arr[i];
    }
  }

  return sum;
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
