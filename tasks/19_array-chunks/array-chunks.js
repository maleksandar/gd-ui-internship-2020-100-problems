export function arrayChunks(array, size) {
  const n = array.length;
  const groups = [];

  for (let i = 0; i < n; i += size) {
    if (n - i < size) {
      groups.push(array.slice(i));
    } else {
      groups.push(array.slice(i, i + size));
    }
  }

  return groups;
}
