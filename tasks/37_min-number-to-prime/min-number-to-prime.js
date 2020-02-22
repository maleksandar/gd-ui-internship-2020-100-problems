export const minNumberToPrime = arr => {
  let primeNum;
  let counter = 0;
  let x;

  x = arr.reduce((a, b) => a + b, 0);

  while (!primeNum) {
    if (isPrime(x + counter)) {
      primeNum = x + counter;
    }
    counter++;
  }
  return primeNum - x;
};

const isPrime = num => {
  for (var i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};
