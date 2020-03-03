export function diffArray(arr1, arr2) {
  const uniqInFirstArr = arr1.filter((el) => el !== arr2[arr2.indexOf(el)]);
  const uniqInSecondArr = arr2.filter((el) => el !== arr1[arr1.indexOf(el)]);
  return uniqInFirstArr.concat(uniqInSecondArr);
}
