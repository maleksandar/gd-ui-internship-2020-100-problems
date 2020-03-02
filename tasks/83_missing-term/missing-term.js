export function findMissing(array) {
  const diff = (array[array.length - 1] - array[0]) / array.length;

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i + 1] - array[i] !== diff) {
      return array[i] + diff;
    }
  }
}
