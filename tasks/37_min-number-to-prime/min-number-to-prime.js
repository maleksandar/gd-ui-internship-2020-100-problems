export function minNumberToPrime(arr) {
  let num = arr.reduce((sum, cur) => sum += cur, 0);
  let i = 0;
  while (!isPrime(num++)) {
    i++;
  }
  return i;
}

const isPrime = (broj) => {
  for (let i = 2; i<broj/2; i++) {
    if (broj % i === 0) return false;
  }
  return true;
};
