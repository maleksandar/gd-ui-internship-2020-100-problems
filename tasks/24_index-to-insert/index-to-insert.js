export const getIndexToInsert = (arr, num) => {
  return arr
    .concat(num)
    .sort(function(a, b) {
      return a - b;
    })
    .indexOf(num);
};
