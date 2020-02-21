export function findEqualIndex(arr) {
  let leftSum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let rightSum = 0;
    for (let j = i + 1; j < arr.length; j++) {
      rightSum += arr[j];
    }
    if (leftSum === rightSum) return i;

    leftSum += arr[i];
  }

  return -1;
}
