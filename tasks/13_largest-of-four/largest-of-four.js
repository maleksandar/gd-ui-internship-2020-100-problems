export function largestOfFour(arr) {
  // Map iterates through arr and reduce returns the max num for every sub-array
  return arr.map((arr) => arr.reduce((max, curr) => curr>max? curr: max), 0);
}
