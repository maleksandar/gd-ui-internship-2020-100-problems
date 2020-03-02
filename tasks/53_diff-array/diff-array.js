export function diffArray(array1, array2) {
  let difArray = [];

  array1.forEach((value) => {
    if (array2.indexOf(value) === -1) {
      difArray.push(value);
    }
  });

  array2.forEach((value) => {
    if (array1.indexOf(value) === -1) {
      difArray.push(value);
    }
  });

  return difArray;
}
