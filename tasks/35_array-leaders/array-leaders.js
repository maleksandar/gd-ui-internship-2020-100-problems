export const arrayLeaders = (arr) => {
  const n = arr.length;
  let sum = arr[n - 1];
  let res = sum > 0 ? [sum] : [];

  for (let i = n - 2; i >= 0; i--) {
    if (arr[i] > sum) {
      res.push(arr[i]);
    }

    sum += arr[i];
  }

  return res.reverse();
};
