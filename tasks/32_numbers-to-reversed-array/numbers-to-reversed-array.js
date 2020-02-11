export const numberToReversedArray = (number) => {
  return Array.from(number.toString().split('').reverse().join('')).map(Number);
};
