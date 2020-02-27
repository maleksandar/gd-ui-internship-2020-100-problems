export const numPrimorial = (number) => {
  const LIMIT = 1000;
  let found = 0;
  let currNumber = 1;
  let primorialNumber = 1;
  let primes = [];

  sieveOfEratosthenes(primes, LIMIT);

  while (found < number) {
    if (primes[currNumber]) {
      primorialNumber *= currNumber;
      found++;
    }

    currNumber++;
  }

  return primorialNumber;
};

const sieveOfEratosthenes = (primes, limit) => {
  for (let i = 0; i <= limit; i++) {
    primes.push(true);
  }

  primes[1] = false;

  for (let p = 2; p * p <= limit; p++) {
    if (primes[p]) {
      // Set all multiples of p to non-prime
      for (let i = p * 2; i <= limit; i += p) {
        primes[i] = false;
      }
    }
  }
};
