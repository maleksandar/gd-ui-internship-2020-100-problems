export const arrayPlusArray = (arr1, arr2) => {
  const arrayLength = Math.min(arr1.length, arr2.length);
  let res = [];

  for (let i = 0; i < arrayLength; i++) {
    res.push(arr1[i] + arr2[i]);
  }

  const firstArray = [...arr1].splice(arrayLength);
  const secondArray = [...arr2].splice(arrayLength);

  return [...res, ...firstArray, ...secondArray];
};
