export const findMissing = arr => {
  var incrementNum = arr[1] - arr[0];

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] - arr[i - 1] !== incrementNum) {
      return arr[i] - incrementNum;
    }
  }

  return arr[0];
};
