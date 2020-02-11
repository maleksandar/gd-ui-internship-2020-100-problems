export function rowWeights(arr) {
  return arr.reduce((res, curr, i) => {
    if (i % 2 === 0) {
      res[0] += curr;
    } else {
      res[1] += curr;
    }
    return res;
  }, [0, 0]);
}
