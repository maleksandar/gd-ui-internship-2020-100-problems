export function arrayPlusArray(arr1, arr2) {
  const arr3 = [];
  let i = 0;
  for (i = 0; i < Math.min(arr1.length, arr2.length); i++) {
    arr3.push(arr1[i] + arr2[i]);
  }
  if (arr1.length > arr2.length) {
    for (i; i< arr1.length; i++) {
      arr3.push(arr1[i]);
    }
  } else if (arr1.length < arr2.length) {
    for (i; i<arr2.length; i++) {
      arr3.push(arr2[i]);
    }
  }
  return arr3;
}
