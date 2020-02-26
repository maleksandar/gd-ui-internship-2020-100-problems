

export function smallestCommons(arr) {
  let smallerNumber = arr[0] < arr[1] ? arr[0] : arr[1];
  let biggerNumber = arr[0] > arr[1] ? arr[0] : arr[1];

  let currentScm = scm(smallerNumber, smallerNumber + 1);
  smallerNumber ++;
  while (smallerNumber <= biggerNumber) {
    currentScm = scm(currentScm, smallerNumber);
    smallerNumber++;
  }

  return currentScm;
}

function scm(a, b) {
  if (a == 0 || b == 0) {
    return 0;
  }
  return (a*b)/(gcd(a, b));
}

function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a%b);
}
