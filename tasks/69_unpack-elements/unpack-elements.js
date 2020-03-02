export function unpackArray(array) {
  return array.reduce(function iter(acc, curr) {
    if (Array.isArray(curr)) {
      return curr.reduce(iter, acc);
    }

    return acc.concat(curr);
  }, []);
}
