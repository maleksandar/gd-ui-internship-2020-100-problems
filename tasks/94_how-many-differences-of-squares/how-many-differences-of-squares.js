/**
 * @param {number} n
 * @return {number}
 * @description "Returns the amount of numbers
 * between 1 and n that can be represented as
 * the difference of two perfect squares.
 */
export function squares(n) {
  let amountOfNumbers = 0;

  for (let i = 1; i <= n; i++) {
    if (canBeWrittenAsDifferenceOfSquares(i)) {
      amountOfNumbers++;
    }
  }

  return amountOfNumbers;
}

function canBeWrittenAsDifferenceOfSquares(number) {
  return !(number % 4 === 2);
}
