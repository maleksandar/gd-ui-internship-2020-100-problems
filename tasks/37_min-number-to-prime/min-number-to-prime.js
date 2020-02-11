// export
export const minNumberToPrime = arr => {
  let higherPrime;
  let counter = 0;
  let x;

  x = arr.reduce((a, b) => a + b, 0);

  while (!higherPrime) {
    if (!higherPrime) {
      if (isPrime(x + counter)) {
        higherPrime = x + counter;
      }
    }
    counter++;
  }
  return higherPrime - x;
};

const isPrime = x => {
  for (var i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return x > 1;
};
