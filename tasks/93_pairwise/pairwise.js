export function pairwise(array, number) {
  let sumOfElementPairs = 0;
  let copiedArray = array.slice();

  if (array === []) {
    return 0;
  }

  for (let i = 0; i < copiedArray.length; i++) {
    for (let j = i + 1; j < copiedArray.length; j++) {
      if (copiedArray[i] + copiedArray[j] === number) {
        sumOfElementPairs += i + j;
        delete copiedArray[i];
        delete copiedArray[j];
      }
    }
  }

  return sumOfElementPairs;
}
