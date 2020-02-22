export const cloneArr = arr => {
  let copyArr = [];
  if (arr.length === 0) {
    return copyArr;
  }
  copyArr = [...arr];

  return copyArr;
};
