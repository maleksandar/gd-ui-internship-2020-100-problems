export const findEqualIndex = arr => {
  let equalIndex = -1;
  for (let i = 0; i < arr.length; i++) {
    const leftSum = arr.slice(0, i).reduce((a, c) => a + c, 0);
    const rightSum = arr.slice(i + 1).reduce((a, c) => a + c, 0);
    if (leftSum === rightSum) {
      equalIndex = i;
      break;
    }
  }
  return equalIndex;
};
