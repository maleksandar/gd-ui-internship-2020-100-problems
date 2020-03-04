/**
 * @param {number} a
 * @param {number|undefined} b
 * @return {(number|Function|undefined)}
 * @description "Returns a function with one argument if only one argument
 * is provided, else returns the sum of two arguments."
 */

export function addTogether(a, b) {
  if (typeof a !== 'number') {
    return undefined;
  }

  if (arguments.length < 2) {
    return (b) => {
      if (typeof b !== 'number') {
        return undefined;
      }
      return a + b;
    };
  } else if (typeof b !== 'number') {
    return undefined;
  }

  return a + b;
}

