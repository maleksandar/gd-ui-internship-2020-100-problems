/**
 * @param {Array<number>} array
 * @param {Function} fn
 * @return {number}
 * @description "Returns the first element in the array
 * that passes a truth test (given function)."
 */

export function findElement(array, fn) {
  for (let i = 0; i < array.length; i++) {
    if (fn(array[i])) {
      return array[i];
    }
  }
}
