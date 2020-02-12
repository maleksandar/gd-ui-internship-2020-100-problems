export function arrayChunks(array, size) {
  return array.reduce((acc, item, index, array) => {
    if (!(index % size)) {
            array.length - index < size ?
                acc.push(array.slice(index)) :
                acc.push(array.slice(index, index + size));
    }
    return acc;
  }, []);
}
