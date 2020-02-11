export const arrayPlusArray = (arr1, arr2) => {
  let n = Math.min(arr1.length, arr2.length);
  let res = [];

  for (let i = 0; i < n; i++) {
    res.push(arr1[i] + arr2[i]);
  }

  arr1 = arr1.splice(n);
  arr2 = arr2.splice(n);

  return [...res, ...arr1, ...arr2];
};
