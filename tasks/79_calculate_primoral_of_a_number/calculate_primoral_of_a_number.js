

export function numPrimorial(countInput) {
  const count = countInput - 1;
  let lastPrime = 2;
  let ret = lastPrime;
  for (let i=0; i<count; i++) {
    lastPrime = nextPrime(lastPrime);
    ret*=lastPrime;
  }
  return ret;
}

function nextPrime(lastPrime) {
  let testForPrime = lastPrime + 1;
  while (!isPrime(testForPrime)) testForPrime+=1;
  return testForPrime;
}

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
}
