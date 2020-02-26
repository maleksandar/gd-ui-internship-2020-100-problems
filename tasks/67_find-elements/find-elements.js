export const findElement = (arr, fn) => {
  let num;

  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i]) === true) {
      num = arr[i];
      return num;
    }
  }
};
