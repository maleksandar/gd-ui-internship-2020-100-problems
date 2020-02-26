
export function sumPrimes(num) {
  let sum = 0;
  for (let i=0; i<=num; i++) {
    if (isPrime(i)) sum+=i;
  }
  return sum;
}

function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
}
