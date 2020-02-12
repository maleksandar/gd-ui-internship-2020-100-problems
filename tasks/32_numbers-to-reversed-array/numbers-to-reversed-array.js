export function numberToReversedArray(number) {
  let reversedArray = [];

  while (number) {
    reversedArray.push(number % 10);
    number = Math.floor(number / 10);
  }

  return reversedArray;
}
