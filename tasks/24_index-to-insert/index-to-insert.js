export function getIndexToInsert(array, num) {
  return array
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
}
