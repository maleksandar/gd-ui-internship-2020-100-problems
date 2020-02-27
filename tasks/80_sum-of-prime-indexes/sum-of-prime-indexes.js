export function sumPrimeIndexedElements(arr) {
  let sumOfPrimeIndices = 0;
  for (let i = 2; i < arr.length; i++) {
    if (isPrime(i)) {
      sumOfPrimeIndices += arr[i];
    }
  }
  return sumOfPrimeIndices;
}
function isPrime(num) {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) return false;
  }
  return true;
}
