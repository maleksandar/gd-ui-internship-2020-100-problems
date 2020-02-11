export const findEqualIndex = arr => {
  let leftSum = 0;
  for (let i = 1; i < arr.length - 1; i++) {
    leftSum += arr[i - 1];
    let rightSum = 0;
    for (let j = i; j < arr.length - 1; j++) {
      rightSum += arr[j + 1];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};
