export const dropElements = (arr, fn) => {
  let passed = arr.findIndex(fn);

  let count = 0;
  while (count < passed) {
    arr.shift();
    count++;
  }

  if (passed === -1) {
    arr = [];
  }
  return arr;
};
