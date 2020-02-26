export const unpackArray = arr => {
  for (let i = 0; i < arr.length; i++) {
    while (true) {
      if (Array.isArray(arr[i])) {
        arr.splice(i, 1, ...arr[i]);
      } else {
        break;
      }
    }
  }
  return arr;
};
