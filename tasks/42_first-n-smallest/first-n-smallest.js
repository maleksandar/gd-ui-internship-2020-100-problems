export const firstNSmallest = (array, n) => {
  let a = array.slice();
  let small = [];
  let result = [];
  a.sort((a, b) => a - b);

  for (let i = 0; i < a.length && i < n; i++) {
    small.push(a[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if (small.includes(array[i])) {
      result.push(array[i]);
      small.splice(small.indexOf(array[i]), 1);
    }
  }
  return result;
};
