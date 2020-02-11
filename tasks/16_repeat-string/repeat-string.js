export const repeatStringNumTimes = (string, numTimes) => {
  return (numTimes < 0) ? '' : string.repeat(numTimes);
};
