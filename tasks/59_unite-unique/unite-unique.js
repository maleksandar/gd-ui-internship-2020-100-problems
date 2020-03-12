/* eslint-disable no-undef */
/* eslint-disable prefer-rest-params */
/*
export function uniteUnique() {
  let array = [];

  for (let i = 0; i < arguments.length; i++) {
    array = array.concat(arguments[i]);
  }

  return Array.from(new Set(array));
}
*/

export function uniteUnique() {
  let array = [];
  let uniqueArray = [];

  for (let i = 0; i < arguments.length; i++) {
    array = array.concat(arguments[i]);
  }

  for (let i = 0; i < array.length; i++) {
    if (isElementInArray(uniqueArray, array[i])) {
      uniqueArray.push(array[i]);
    }
  }

  return uniqueArray;
}

function isElementInArray(array, element) {
  return array.indexOf(element) === -1;
}
