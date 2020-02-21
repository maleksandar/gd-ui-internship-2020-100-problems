export const truncateArray = (arr, restFrom) => {
  let newArr = [];
  let index = 0;
  for (let i = restFrom; i < arr.length; i++) {
    newArr[index] = arr[i];
    index++;
  }
  return newArr;
};
