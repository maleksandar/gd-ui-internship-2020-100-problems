export function firstNSmallest(arr, n) {
  if (n === 0) return [];

  let nSmallest = [];
  for (let i = 0; i < n; i++) {
    nSmallest.push(arr[i]);
  }
  let maxInNSmallest = getMaxInNSmallest(nSmallest);

  for (let i = n; i < arr.length; i++) {
    if (arr[i] < maxInNSmallest) {
      nSmallest.splice(nSmallest.lastIndexOf(maxInNSmallest), 1);
      nSmallest.push(arr[i]);
      maxInNSmallest = getMaxInNSmallest(nSmallest);
    }
  }
  return nSmallest;
}

function getMaxInNSmallest(arr) {
  return Math.max(...arr);
}
