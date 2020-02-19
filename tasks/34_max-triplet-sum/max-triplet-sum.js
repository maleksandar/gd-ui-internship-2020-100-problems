

export function maxTripletSum(array) {
  let maxValues = [Number.MIN_SAFE_INTEGER, Number.MIN_SAFE_INTEGER,
    Number.MIN_SAFE_INTEGER];

  array.forEach((element) => {
    if (maxValues[0] < element && maxValues[1] !== element
        && maxValues[2] !== element) {
      maxValues[0] = element;
      maxValues = maxValues.sort();
    }
  });

  return maxValues.reduce((acc, val) => acc + val, 0);
}
