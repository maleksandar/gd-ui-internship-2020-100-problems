export function numPrimorial(num) {
  let primorialCount = 0;
  let primorial = 1;
  let i = 2;
  while (primorialCount < num) {
    if (isPrime(i)) {
      primorial *= i;
      primorialCount++;
    }
    i++;
  }

  return primorial;
}

function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
