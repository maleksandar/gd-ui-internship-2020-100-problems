export const getIndexToInsert = (arr, value) => {
  return arr.concat(value).sort((a, b) => a - b).indexOf(value);
};
