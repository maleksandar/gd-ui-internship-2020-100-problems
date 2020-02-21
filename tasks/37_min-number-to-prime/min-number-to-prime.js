export const minNumberToPrime = (arr) => {
  const sum = arr.reduce((a, b) => a + b, 0);

  if (isPrime(sum)) {
    return 0;
  }

  const prime = nextPrime(sum);
  return prime - sum;
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

const nextPrime = (n) => {
  if (n <= 1) {
    return 2;
  }

  let prime = n;
  let found = false;

  while (!found) {
    prime++;

    if (isPrime(prime)) {
      found = true;
    }
  }

  return prime;
};
