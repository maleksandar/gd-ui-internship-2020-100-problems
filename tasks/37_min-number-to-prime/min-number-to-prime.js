export function minNumberToPrime(ints) {
  let sumOfInts = ints.reduce((a, b) => a + b);

  let minNum = 0;

  while (!isPrime(sumOfInts + minNum)) {
    minNum++;
  }

  return minNum;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (!(num % i)) return false;
  }
  return true;
}
