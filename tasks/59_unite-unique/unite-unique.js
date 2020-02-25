/* eslint-disable no-undef */
/* eslint-disable prefer-rest-params */
export function uniteUnique() {
  let array = [];

  for (let i = 0; i < arguments.length; i++) {
    array = array.concat(arguments[i]);
  }

  let uniqueArray = Array.from(new Set(array));

  return uniqueArray;
}
