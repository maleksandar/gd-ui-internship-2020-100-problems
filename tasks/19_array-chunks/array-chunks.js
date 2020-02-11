export const arrayChunks = (arr, divider) => {
  const chunkedArr = [];
  let i = 0;

  while (i < arr.length) {
    chunkedArr.push(arr.slice(i, i + divider));
    i += divider;
  }
  return chunkedArr;
};
