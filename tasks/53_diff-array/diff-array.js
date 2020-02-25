

export function diffArray(arr1, arr2) {
  let newArr = [];
  let arr1Hash = {};
  let arr2Hash = {};


  for (let i=0; i<arr1.length; i++) {
    arr1Hash[arr1[i]] = true;
  }

  for (let i=0; i<arr2.length; i++) {
    arr2Hash[arr2[i]] = true;
  }

  for (let i=0; i<arr1.length; i++) {
    if (arr2Hash[arr1[i]] !== true) newArr.push(arr1[i]);
  }

  for (let i=0; i<arr2.length; i++) {
    if (arr1Hash[arr2[i]] !== true) newArr.push(arr2[i]);
  }

  return newArr;
}
