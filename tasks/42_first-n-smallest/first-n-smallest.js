export function firstNSmallest(arrayOfNumbers, n) {
  const len = arrayOfNumbers.length;
  const arrayOfObjects = [];

  for (let i = 0; i < len; i++) {
    let numberOfSmaller = 0;

    for (let j = 0; j < len; j++) {
      if (arrayOfNumbers[j] < arrayOfNumbers[i]) {
        numberOfSmaller++;
      }
    }

    arrayOfObjects.push({
      number: arrayOfNumbers[i],
      numberOfSmaller: numberOfSmaller,
      index: i,
    });
  }

  const sortedByNumberOfSmaller = arrayOfObjects.sort(compareNumberOfSmaller);
  const arrayOfNSmallest = sortedByNumberOfSmaller.slice(0, n);
  const sortedByIndexes = arrayOfNSmallest.sort(compareIndexes);

  return sortedByIndexes.map((object) => object.number);

  function compareNumberOfSmaller(a, b) {
    return a.numberOfSmaller - b.numberOfSmaller;
  }
  function compareIndexes(a, b) {
    return a.index - b.index;
  }
}
