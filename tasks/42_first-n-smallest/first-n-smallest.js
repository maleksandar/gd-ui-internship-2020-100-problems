export function firstNSmallest(arr, n) {
  if (n === 0) return [];

  let nSmallest = [];
  // Initial nSmallest array
  for (let i = 0; i < n; i++) {
    nSmallest.push(arr[i]);
  }

  for (let i = n; i < arr.length; i++) {
    // Finds curr largest element in nSmallest
    let largestInN = nSmallest.
        reduce((max, curr) => max > curr? max : curr);
    if (arr[i] < largestInN) {
    // Inserts new element at end and removes the largestInN
      nSmallest.splice(nSmallest.lastIndexOf(largestInN), 1);
      nSmallest.push(arr[i]);
    }
  }
  return nSmallest;
}
