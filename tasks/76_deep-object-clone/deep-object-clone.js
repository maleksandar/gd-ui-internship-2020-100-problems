/**
 * @param {Object} object
 * @return {Object}
 * @description "Returns a deep copy of an object."
 */

export function deepClone(object) {
  let clonedObject = {};

  for (const property in object) {
    if (typeof object[property] === 'object' && object[property] !== null) {
      clonedObject[property] = deepClone(object[property]);
    } else {
      clonedObject[property] = object[property];
    }
  }

  return clonedObject;
}
