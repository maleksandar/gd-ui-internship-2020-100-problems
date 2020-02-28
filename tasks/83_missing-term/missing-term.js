export const findMissing = (arr) => {
  const length = arr.length;
  const diff = (arr[length - 1] - arr[0]) / length;

  for (let i = 0; i < length - 1; i++) {
    if (arr[i + 1] - arr[i] !== diff) {
      return arr[i] + diff;
    }
  }
};
