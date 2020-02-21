export const removeFalsyValues = arr => {
  let filteredArr = [];
  let index = 0;
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(arr[i])) {
      filteredArr[index] = arr[i];
      index++;
    }
  }
  return filteredArr;
};
