function sumsOfPreviousElements(array) {
  const sums = [0];

  for (let i = 0; i < array.length - 1; i++) {
    sums.push(sums[i] + array[i]);
  }

  return sums;
}

export function findEqualIndex(array) {
  const sumsFromLeftToRight = sumsOfPreviousElements(array);
  const sumsFromRightToLeft = sumsOfPreviousElements([...array].reverse());

  return sumsFromRightToLeft.reverse().findIndex((element, index) => {
    return element === sumsFromLeftToRight[index];
  });
}
