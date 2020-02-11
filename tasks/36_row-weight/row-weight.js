export const rowWeights = arr => {
  var oddWeights = [];
  var evenWeights = [];
  arr.forEach((el, i) => {
    if (i % 2 !== 0) {
      oddWeights.push(el);
    } else {
      evenWeights.push(el);
    }
  });
  oddWeights = oddWeights.reduce((a, b) => a + b, 0);
  evenWeights = evenWeights.reduce((a, b) => a + b, 0);
  return [evenWeights, oddWeights];
};
