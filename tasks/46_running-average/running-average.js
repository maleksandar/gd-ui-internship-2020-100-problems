export const runningAverage = num => {
  var total = 0;
  var timesCalled = 0;
  return function(n) {
    timesCalled++;
    total += n;
    return Math.round((total / timesCalled) * 100) / 100;
  };
};
