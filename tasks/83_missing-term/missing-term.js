export function findMissing(arr) {
  const firstElement = arr[0];
  const lastElement = arr[arr.length - 1];
  const mean = (lastElement - firstElement)/arr.length;

  /* If the diffrence between two consecutive num isn't the mean
  then thats where the missing term is */
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i+1] - arr[i] !== mean) {
      return arr[i] + mean;
    }
  }
}
