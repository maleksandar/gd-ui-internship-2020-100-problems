export const findEqualIndex = arr => {
  var leftSum = 0;
  for (var i = 1; i < arr.length - 1; i++) {
    leftSum += arr[i - 1];
    var rightSum = 0;
    for (var j = i; j < arr.length - 1; j++) {
      rightSum += arr[j + 1];
    }
    if (leftSum === rightSum) {
      return i;
    }
  }
  return -1;
};
