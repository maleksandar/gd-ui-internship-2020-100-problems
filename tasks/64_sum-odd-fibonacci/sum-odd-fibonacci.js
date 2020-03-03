/**
 * @param {number} num
 * @return {number}
 * @description "Returns the sum of all odd Fibonacci numbers
 * that are less than or equal to num."
 */

export function sumFibs(num) {
  return fibonacciArray(num)
      .filter((number) => number % 2 !== 0)
      .reduce((sum, number) => sum + number, 0);
}

function fibonacciArray(n) {
  const fibonacciArray = [1, 1];
  let nextFibonacciNumber = 2;
  for (let i = 2; nextFibonacciNumber <= n; i++) {
    fibonacciArray.push(nextFibonacciNumber);
    nextFibonacciNumber = fibonacciArray[i - 1] + fibonacciArray[i];
  }
  return fibonacciArray;
}
