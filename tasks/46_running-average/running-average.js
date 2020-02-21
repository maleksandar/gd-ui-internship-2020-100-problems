export const runningAverage = () => {
  let sum = 0;
  let functionCallCount = 0;

  return (number) => {
    functionCallCount++;
    sum += number;
    return sum / functionCallCount;
  };
};
