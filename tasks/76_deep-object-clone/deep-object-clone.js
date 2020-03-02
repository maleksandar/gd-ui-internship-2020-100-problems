/* eslint-disable guard-for-in */
export function deepClone(obj) {
  let clonedObject = {};

  for (let key in obj) {
    let value = obj[key];
    clonedObject[key] = (typeof value === 'object') ? deepClone(value) : value;
  }

  return clonedObject;
}
