export const numberToReversedArray = num => {
  return num
    .toString()
    .split("")
    .reverse()
    .map(Number);
};
