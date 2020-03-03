/**
 * @param {Array<any>} nestedArray
 * @return {Array<number>}
 * @description "Flattens a nested array."
 */

export function unpackArray(nestedArray) {
  return nestedArray.reduce((flattenArray, element) => {
    return flattenArray.concat(
      Array.isArray(element) ? unpackArray(element) : element
    );
  }, []);
}
