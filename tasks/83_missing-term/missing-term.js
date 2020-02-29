export function findMissing(arr) {
  const mean = (arr[arr.length - 1] - arr[0])/arr.length;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] - arr[i] !== mean) {
      return arr[i] + mean;
    }
  }
}
