export const arrayChunks = (arr, size) => {
  let res = [];
  const n = arr.length;

  for (let i = 0; i < n; i += size) {
    res.push(arr.slice(i, i + size));
  }

  return res;
};
