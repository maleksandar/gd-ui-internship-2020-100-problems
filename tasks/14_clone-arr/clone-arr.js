// export const cloneArr = (arr) => [...arr];

export const cloneArr = (arr) => {
  let clonedArray = [];

  for (let i = 0; i < arr.length; i++) {
    clonedArray.push(arr[i]);
  }

  return clonedArray;
};
