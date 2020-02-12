export function maxTripletSum(array) {
  let arrayWithoutDuplicates = array.filter((item, index) =>
    array.indexOf(item) === index);
  let sortedArray = arrayWithoutDuplicates.sort((a, b) => a - b);
  let lastThree = sortedArray.slice(-3);
  let sumOfLastThree = lastThree.reduce((acc, item) => acc + item, 0);
  return sumOfLastThree;
}
