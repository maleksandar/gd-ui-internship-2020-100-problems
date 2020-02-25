export function truncateArray(arr, nElements) {
  if (nElements > arr.length) {
    return [];
  }

  if (nElements === 0) {
    return arr;
  }

  return arr.slice(nElements);
}
