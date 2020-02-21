export function sortByBits(arrayOfNumbers) {
  let arrayOfObjects = arrayOfNumbers.map((number) => {
    const binary = makeBinary(number);
    return {
      number: number,
      binaryNumber: binary,
      numberOfOnes: countBits(binary)};
  });

  const sortedObjects = arrayOfObjects.sort(compare);

  return sortedObjects.map((obj) => obj.number);

  function compare(a, b) {
    return a.numberOfOnes - b.numberOfOnes
      || a.number - b.number;
  }

  function makeBinary(number) {
    return number.toString(2);
  }

  function countBits(number) {
    return number.split('').filter((bit) => bit === '1').length;
  }
}
