export const getAverage = marks => {
  let sum = marks.reduce(function(prev, elem) {
    return prev + elem;
  }, 0);

  let average = sum / marks.length;
  return Math.floor(average);
};
