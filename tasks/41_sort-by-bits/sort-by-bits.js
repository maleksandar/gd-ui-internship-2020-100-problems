export function sortByBits(arrayOfNumbers) {
  return arrayOfNumbers.sort(compareByNumberOfOne);
}

function makeBinary(number) {
  return number.toString(2);
}

function countBits(number) {
  return number.split('').filter((bit) => bit === '1').length;
}

function compareByNumberOfOne(a, b) {
  const numberOfOnesA = countBits(makeBinary(a));
  const numberOfOnesB = countBits(makeBinary(b));
  return numberOfOnesA - numberOfOnesB
    || a - b;
}

