export const smallestCommons = arr => {
  let maxNum = Math.max(...arr);
  let minNum = Math.min(...arr);

  let result = maxNum;

  for (let i = maxNum - 1; i >= minNum; i--) {
    if (result % i) {
      result += maxNum;
      i = maxNum;
    }
  }
  return result;
};
