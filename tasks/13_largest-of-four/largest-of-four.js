export const largestOfFour = mainArray => {
  return mainArray.map(subArray => {
    return subArray.reduce((previousLargestNumber, currentLargestNumber) => {
      return currentLargestNumber > previousLargestNumber
        ? currentLargestNumber
        : previousLargestNumber;
    }, 0);
  });
};
