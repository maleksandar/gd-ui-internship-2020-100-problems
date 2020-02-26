export const smallestCommons = (arr) => {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  let result = min;

  for (let i = min; i <= max; i++) {
    result = lcm(i, result);
  }

  return result;
};

// The Euclidean algorithm for Greatest Common Divisor
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

// Least Common Multiple
const lcm = (a, b) => a * b / gcd(a, b);
