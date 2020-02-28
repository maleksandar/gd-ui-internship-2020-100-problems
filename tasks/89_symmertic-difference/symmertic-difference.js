export const sym = (...args) => {
  let diff = [...args].reduce((acc, curr) => {
    const arr = [].concat(diffArray(acc, curr));
    return arr.filter((value, index, self) => self.indexOf(value) === index);
  });

  return diff.sort();
};

const diffArray = (arr1, arr2) => {
  let uniqueFirst = getUniqueValues(arr1, arr2);
  let uniqueSecond = getUniqueValues(arr2, arr1);
  return uniqueFirst.concat(uniqueSecond);
};

const getUniqueValues = (arr1, arr2) => {
  return arr1.filter((value) => arr2.indexOf(value) < 0);
};
