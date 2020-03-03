/**
 * @param {string} binarySentence
 * @return {string}
 * @description "Returns an English translated sentence
 * of the passed binary string."
 */

export function binaryDecode(binarySentence = '') {
  const binaryLetters = binarySentence.split(' ');
  return binaryLetters.map((letter) => {
    return String.fromCharCode(parseInt(letter, 2));
  }).join('');
}
