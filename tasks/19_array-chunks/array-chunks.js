export const arrayChunks = (arr, size) => {
  if (size < 1) {
    return arr;
  }

  let res = [];

  for (let i = 0; i < arr.length; i += size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
};
