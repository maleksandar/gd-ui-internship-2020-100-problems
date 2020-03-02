export function leastCommonMultiple(a, b) {
  if (a == 0 || b == 0) {
    return 0;
  }
  return (a*b)/(gcd(a, b));
}

function gcd(a, b) {
  if (b === 0) {
    return a;
  }

  return gcd(b, a%b);
}
