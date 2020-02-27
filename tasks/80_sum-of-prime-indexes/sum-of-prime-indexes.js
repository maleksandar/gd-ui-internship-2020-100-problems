export function sumPrimeIndexedElements(array) {
  let sumOfPrimeIndexes = 0;

  for (let i = 2; i < array.length; i++) {
    if (isPrime(i)) {
      sumOfPrimeIndexes += array[i];
    }
  }
  return sumOfPrimeIndexes;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
