export function numPrimorial(num) {
  let primorial = 1;
  let countNumbers = 0;
  let i = 2;

  while (countNumbers < num) {
    if (isPrime(i)) {
      primorial *= i;
      countNumbers++;
    }

    i++;
  }

  return primorial;
}

function isPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
