/**
 * @param {Array<number>} arrayOfNumbers
 * @return {number}
 * @description "Finds the missing number in an arithmetic progression."
 */

export function findMissing(arrayOfNumbers) {
  const sumOfArray = arrayOfNumbers.reduce((sum, number) => sum + number, 0);
  const arithmeticSum = getArithmeticSum(
      arrayOfNumbers[0],
      arrayOfNumbers[arrayOfNumbers.length - 1],
      arrayOfNumbers.length + 1
  );

  return arithmeticSum - sumOfArray;
}

function getArithmeticSum(a0, an, n) {
  return n * (a0 + an) / 2;
}
