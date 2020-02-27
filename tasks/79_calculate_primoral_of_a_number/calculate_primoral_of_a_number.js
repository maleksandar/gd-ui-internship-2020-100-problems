export const numPrimorial = n => {
  const isPrime = num => {
    for (let i = 2; i < num; i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const primes = [];
  let t = 2;
  while (primes.length < n) {
    if (isPrime(t)) primes.push(t);
    t += 1;
  }
  return primes.reduce((first, second) => first * second, 1);
};
