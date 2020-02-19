export const repeatStringNumTimes = (string, numTimes) => {
  return (numTimes < 0 || string === '') ? '' : string.repeat(numTimes);
};
