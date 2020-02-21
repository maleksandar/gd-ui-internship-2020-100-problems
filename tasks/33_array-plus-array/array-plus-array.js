export const arrayPlusArray = (arr1, arr2) => {
  const arr3 = [];
  let longer = 0;
  if (arr1.length > arr2.length) {
    longer = arr1.length;
  } else {
    longer = arr2.length;
  }

  for (let i = 0; i < longer; i++) {
    if (arr1[i] === undefined) {
      arr3.push(0 + arr2[i]);
    } else if (arr2[i] === undefined) {
      arr3.push(arr1[i] + 0);
    } else {
      arr3.push(arr1[i] + arr2[i]);
    }
  }

  return arr3;
};
