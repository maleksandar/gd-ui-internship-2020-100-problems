export function firstNSmallest(arrayOfNumbers, n) {
  if (n === 0 || arrayOfNumbers.length === 0) {
    return [];
  }
  const valueOfNthSmallest = nthSmallest(arrayOfNumbers, n);
  return arrayOfNumbers.filter((x) => x <= valueOfNthSmallest).slice(0, n);
}

function nthSmallest(array, n) {
  if (n === 0 || array.length === 0) {
    throw new Error(`Can't find 0th smallest element`);
  }
  const pivotIndex = 0;
  const pivot = array[pivotIndex];
  const smallerThanPivot = [];
  const largerOrEqualThanPivot = [];
  array.slice(pivotIndex + 1).forEach((element) => {
    if (element < pivot) {
      smallerThanPivot.push(element);
    } else {
      largerOrEqualThanPivot.push(element);
    }
  });
  if (smallerThanPivot.length === n - 1) {
    return pivot;
  } else if (smallerThanPivot.length < n) {
    return nthSmallest(largerOrEqualThanPivot, n - smallerThanPivot.length - 1);
  } else {
    return nthSmallest(smallerThanPivot, n);
  }
}
