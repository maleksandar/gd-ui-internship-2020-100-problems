export function leastCommonMultiple(num1, num2) {
  return (num1 * num2) / gcd(num1, num2);
}

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}

