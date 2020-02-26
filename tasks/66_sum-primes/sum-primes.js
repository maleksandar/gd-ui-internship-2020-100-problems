export function sumPrimes(num) {
  let primeSum = 0;
  for (let i = 2; i <= num; i++) {
    if (isPrime(i)) {
      primeSum += i;
    }
  }
  return primeSum;
}
function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
