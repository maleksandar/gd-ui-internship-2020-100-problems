/**
 * @param {Array<number>} array
 * @param {Function} fn
 * @return {Array<number>}
 * @description "Drops the elements of an array, starting from the front,
 * until the predicate returns true."
 */

export function dropElements(array, fn) {
  const copiedArray = [...array];

  for (let i = 0; i < array.length; i++) {
    if (!fn(array[i])) {
      copiedArray.shift();
    } else {
      break;
    }
  }

  return copiedArray;
}
