export const uniqueInOrder = iterableString => {
  var finalArray = [];
  var tempArray = [];
  if (Array.isArray(iterableString) === false) {
    tempArray = iterableString.split("");
  } else {
    tempArray = iterableString;
  }
  for (let i = 0; i < tempArray.length; i++) {
    if (tempArray[i] != tempArray[i - 1]) {
      finalArray.push(tempArray[i]);
    }
  }
  return finalArray;
};
