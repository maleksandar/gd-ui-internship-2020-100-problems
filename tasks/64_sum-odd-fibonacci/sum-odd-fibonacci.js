export function sumFibs(number) {
  let fibonacciArray = [0, 1];
  let sum = 0;

  while (fibonacciArray[fibonacciArray.length - 1]
    + fibonacciArray[fibonacciArray.length - 2]
    <= number) {
    fibonacciArray.push(fibonacciArray[fibonacciArray.length - 1]
      + fibonacciArray[fibonacciArray.length - 2]);
  }

  for (let i = 0; i < fibonacciArray.length; i++) {
    if (fibonacciArray[i] % 2 === 1) {
      sum += fibonacciArray[i];
    }
  }

  return sum;
}
