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
  var compare = function(a, b) {
    return a.numberOfOnes - b.numberOfOnes || a.intValue - b.intValue;
  };

  customArr.sort(compare);

  let result = customArr.map(el => el.intValue);
  return result;
};

// sortByBits([14, 8, 10, 12]);
sortByBits([3, 8, 3, 6, 5, 7, 9, 1]);
