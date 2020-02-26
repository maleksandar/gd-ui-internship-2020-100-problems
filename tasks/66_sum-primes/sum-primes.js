export const sumPrimes = num => {
  const isPrime = numToCheck => {
    for (let i = 2; i < numToCheck; i++) {
      if (numToCheck % i === 0) return false;
    }
    return numToCheck !== 1 && numToCheck !== 0;
  };

  let sum = 0;
  for (let i = 1; i <= num; i++) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
};
