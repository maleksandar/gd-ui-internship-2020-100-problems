export const uniqueInOrder = valuesToCheck => {
  var finalArray = [];
  var tempArray = [];
  if (Array.isArray(valuesToCheck) === false) {
    tempArray = valuesToCheck.split("");
  } else {
    tempArray = valuesToCheck;
  }
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] != tempArray[i - 1]) {
      finalArray.push(tempArray[i]);
    }
  }
  return finalArray;
};
