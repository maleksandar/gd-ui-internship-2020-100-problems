export function unpackArray(array) {
  return array.reduce((acc, curr) => {
    return acc.concat(
      Array.isArray(curr) ? unpackArray(curr) : curr
    );
  }, []);
}
