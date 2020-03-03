/**
 * @param {string} string
 * @return {string}
 * @description "Converts upper case letters to lower case,
 * and lower case letters to upper case."
 */

export function swapCases(string) {
  return string.replace(/[a-z]/ig, (letter) => {
    if (isLower(letter)) {
      return letter.toUpperCase();
    } else {
      return letter.toLowerCase();
    }
  });
}

function isLower(letter) {
  return letter === letter.toLowerCase();
}
