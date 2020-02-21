export function getIndexToInsert(arr, num) {
  const cloneArr = [...arr].sort((a, b) => a - b);
  let i = 0;
  while (num > cloneArr[i]) {
    if (num <= cloneArr[i + 1]) {
      return i + 1;
    }
    i++;
  }
  return i;
}
