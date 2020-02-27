export const validate_bet = (rangeArr, nums) => {
  let splittedNums = nums.split(/[\,\s]/g);

  for (let i = 0; i < splittedNums.length; i++) {
    if (
      splittedNums[i] > rangeArr[1] ||
      splittedNums[i] < 1 ||
      splittedNums[i].includes(";") ||
      splittedNums.length < rangeArr[0]
    ) {
      return "None";
    }
  }

  return splittedNums.sort();
};
