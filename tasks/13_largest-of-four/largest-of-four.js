export function largestOfFour(arr) {
  return arr.map((el) => el.reduce(function(max, curr) {
    return max > curr ? max : curr;
  }, 0));
}
