
export function sumPrimeIndexedElements(array) {
  let sum = 0;
  for (let i=0; i<array.length; i++) {
    if (isPrime(i)) sum+=array[i];
  }

  return sum;
}


function isPrime(number) {
  for (let i = 2, s = Math.sqrt(number); i <= s; i++) {
    if (number % i == 0) return false;
  }
  return number > 1;
}
