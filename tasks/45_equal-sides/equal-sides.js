export const findEqualIndex = (arr) => {
  let leftSum = 0;
  let rightSum = 0;

  for (let i = 1; i < arr.length; i++) {
    rightSum += arr[i];
  }

  for (let i = 0, j = 1; j < arr.length; i++, j++) {
    rightSum -= arr[j];
    leftSum += arr[i];

    if (leftSum === rightSum) {
      return i + 1;
    }
  }

  return -1;
};
