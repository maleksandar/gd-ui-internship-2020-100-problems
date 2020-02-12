export function arrayPlusArray(arr1, arr2) {
  arr1.length < arr2.length && ([arr1, arr2] = [arr2, arr1]);
  arr2.forEach((item, index) => arr1[index] += item);
  return arr1;
}
