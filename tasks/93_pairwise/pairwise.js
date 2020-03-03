/**
 * @param {Array<number>} arrayOfNumbers
 * @param {number} sum
 * @return {number}
 * @description "Finds element pairs whose sum is equal to
 * the parameter sum and returns the sum of their indices."
 */
export function pairwise(arrayOfNumbers, sum) {
  let mapOfElementAndIndices = Object.create(null);
  let sumOfIndices = 0;

  for (let i = 0; i < arrayOfNumbers.length; i++) {
    const difference = sum - arrayOfNumbers[i];
    if (thereIsPairThatGivesSum(mapOfElementAndIndices, difference)) {
      const pairIndex = mapOfElementAndIndices[difference].shift();
      sumOfIndices += i + pairIndex;
    } else {
      if (mapOfElementAndIndices[arrayOfNumbers[i]]) {
        mapOfElementAndIndices[arrayOfNumbers[i]].push(i);
      } else {
        mapOfElementAndIndices[arrayOfNumbers[i]] = [i];
      }
    }
  }

  return sumOfIndices;
}

function thereIsPairThatGivesSum(mapOfElementAndIndices, difference) {
  return (
    mapOfElementAndIndices[difference] &&
    mapOfElementAndIndices[difference].length > 0
  );
}

