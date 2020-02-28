export const pairwise = (arr, arg) => {
  if (arr.length === 0) {
    return 0;
  }
  var sum = 0;
  var pairArr = arr.slice();

  for (let i = 0; i < pairArr.length; i++) {
    for (let j = i + 1; j < pairArr.length; j++) {
      if (pairArr[i] + pairArr[j] == arg) {
        sum += i + j;
        pairArr[i] = pairArr[j] = NaN;
      }
    }
  }
  return sum;
};
