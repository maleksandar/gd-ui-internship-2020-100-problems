export function runningAverage() {
  let runsSum = 0;
  let timesRan = 0;

  return function(newRun) {
    timesRan++;
    runsSum += newRun;
    return runsSum / timesRan;
  };
}
