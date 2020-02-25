export const sumAll = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  // Explanation:
  // The Sum Formula: 1 + 2 + ... + n = n * (n + 1) / 2
  // Series: (1 + 2 + ... + max) - (1 + 2 + ... + (min - 1))
  // Apply formula: max * (max + 1) / 2 - (min - 1) * min / 2
  return (max * (max + 1) - (min - 1) * min) / 2;
};

// Alternative solution using reduce()
export const sumAllWithReduce = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let numbers = [];

  for (let i = min; i <= max; i++) {
    numbers.push(i);
  }

  return numbers.reduce((a, b) => a + b, 0);
};

// Alternative solution: iterative approach
export const sumAllIterative = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  let total = 0;

  for (let i = min; i <= max; i++) {
    total += i;
  }

  return total;
};
