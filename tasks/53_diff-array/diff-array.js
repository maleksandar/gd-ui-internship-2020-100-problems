export const diffArray = (arr1, arr2) => {
  let uniqueFirst = getUniqueValues(arr1, arr2);
  let uniqueSecond = getUniqueValues(arr2, arr1);
  return uniqueFirst.concat(uniqueSecond);
};

const getUniqueValues = (arr1, arr2) => {
  return arr1.filter((value) => arr2.indexOf(value) < 0);
};

// Alternative solution using forEach() and indexOf()
export const diffArray2 = (arr1, arr2) => {
  let symmetricDifference = [];

  arr1.forEach((value) => {
    if (arr2.indexOf(value) < 0) {
      symmetricDifference.push(value);
    }
  });

  arr2.forEach((value) => {
    if (arr1.indexOf(value) < 0) {
      symmetricDifference.push(value);
    }
  });

  return symmetricDifference;
};
