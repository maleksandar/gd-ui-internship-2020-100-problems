export function firstNSmallest(array, n) {
  let copiedArray = array.slice();
  let smallestNumbers = [];
  let result = [];

  copiedArray.sort((a, b) => a - b);

  for (let i = 0; i < copiedArray.length && i < n; i++) {
    smallestNumbers.push(copiedArray[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if (smallestNumbers.includes(array[i])) {
      result.push(array[i]);

      smallestNumbers.splice(smallestNumbers.indexOf(array[i]), 1);
    }
  }

  return result;
}
