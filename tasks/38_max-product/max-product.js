export const maxProduct = arr => {
  if (arr.length < 2) {
    return;
  }

  let a = arr[0],
    b = arr[1];

  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j <= arr.length; j++) {
      if (arr[i] * arr[j] > a * b) {
        a = arr[i];
        b = arr[j];
        // console.log(a, b);
      }
      i++;
    }
  }

  return a * b;
};
