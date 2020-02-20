export function getIndexToInsert(arr, num) {
  const cloneArr = [...arr].sort((a, b) => a-b);
  if (num <= cloneArr[0]) return 0;
  if (num > cloneArr[cloneArr.length - 1]) return arr.length;
  for (let i = 0; i < cloneArr.length - 1; i++) {
    if (num <= cloneArr[i + 1]) {
      return i + 1;
    }
  }
}
