export const largestOfFour = arrays => {
  var largestNumber = [0, 0, 0, 0];
  for (let arrayIndex = 0; arrayIndex < arrays.length; arrayIndex++) {
    for (
      var nestedArrIndex = 0;
      nestedArrIndex < arrays[arrayIndex].length;
      nestedArrIndex++
    ) {
      if (arrays[arrayIndex][nestedArrIndex] > largestNumber[arrayIndex]) {
        largestNumber[arrayIndex] = arrays[arrayIndex][nestedArrIndex];
      }
    }
  }
  return largestNumber;
};
