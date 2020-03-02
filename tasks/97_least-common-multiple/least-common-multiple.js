export const leastCommonMultiple = (a, b) => a * b / gcd(a, b);

const gcd = (a, b) => {
  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
};
