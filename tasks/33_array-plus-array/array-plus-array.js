export function arrayPlusArray(arr1, arr2) {
  const arr3 = [];
  const maxLength = Math.max(arr1.length, arr2.length);
  for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    arr3.push(arr1[i] + arr2[i]);
  }
  arr1 = arr1.slice(maxLength);
  arr2 = arr2.slice(maxLength);
  return [...arr3, ...arr1, ...arr2];
}
