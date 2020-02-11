export const cloneArr = arr => {
  let copyArr = [];
  if (arr.length === 0) {
    return copyArr;
  }
  arr.forEach(element => {
    copyArr.push(element);
  });

  return copyArr;
};
