export const sortByBits = arr => {
  var customArr = [];
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    if (arr[i] == 0) {
      customArr.push({
        intValue: 0,
        binaryValue: 0,
        numberOfOnes: 0
      });
    } else {
      customArr.push({
        intValue: arr[i],
        binaryValue: arr[i].toString(2),
        numberOfOnes: arr[i].toString(2).match(/1/g).length
      });
    }
  }

  customArr.sort((a, b) => {
    return a.numberOfOnes - b.numberOfOnes || a.intValue - b.intValue;
  });

  let result = customArr.map(el => el.intValue);
  return result;
};
