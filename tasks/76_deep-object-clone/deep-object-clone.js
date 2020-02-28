/**
 * @param {Object} object
 * @return {Object}
 * @description "Returns a deep copy of an object."
 */

export function deepClone(object) {
  let clonedObject = {};

  for (const property in object) {
    if (object instanceof Object ) {
      clonedObject[property] = deepClone(object[property]);
    } else {
      clonedObject[property] = object[property];
    }
  }

  return clonedObject;
}
