

export function runningAverage() {
  let sum = 0;
  let numberOfElements = 0;

  return function(element) {
    sum += element;
    numberOfElements ++;
    return sum/numberOfElements;
  };
}
