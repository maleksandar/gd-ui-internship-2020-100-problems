export function findEqualIndex(array) {
  const len = array.length;
  for (let i = 0; i < len; i++) {
    const leftSide = array.slice(0, i);
    const rightSide = array.slice(i + 1, len);
    const sumOfLeftSide = leftSide.reduce((a, b) => a + b, 0);
    const sumOfRightSide = rightSide.reduce((a, b) => a + b, 0);

    if (sumOfLeftSide === sumOfRightSide) {
      return i;
    }
  }

  return -1;
}
