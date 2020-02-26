

export function sumFibs(num) {
  if (num === 1 ) return 1;
  if (num === 2) return 2;
  let sum = 2;
  let firstNumber = 1;
  let secondNumber = 1;
  let nextFibonacciNumber = firstNumber + secondNumber;

  while (nextFibonacciNumber <= num) {
    if (nextFibonacciNumber % 2 === 1) {
      sum+= nextFibonacciNumber;
    }
    firstNumber = secondNumber;
    secondNumber = nextFibonacciNumber;
    nextFibonacciNumber = firstNumber + secondNumber;
  }


  return sum;
}
