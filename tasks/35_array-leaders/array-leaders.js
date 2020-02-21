export function arrayLeaders(arr) {
  let sum = 0;
  const res = [];
  for (let i=arr.length - 1; i >= 0; i--) {
    if (arr[i] > sum) {
      res.unshift(arr[i]);
    }
    sum += arr[i];
  }
  return res;
}
