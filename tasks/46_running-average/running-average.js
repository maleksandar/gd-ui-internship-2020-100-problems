export function runningAverage() {
  let sumOfValues = 0;
  let numOfValues = 0;

  return function(value) {
    sumOfValues += value;
    numOfValues++;
    return sumOfValues / numOfValues;
  };
}

