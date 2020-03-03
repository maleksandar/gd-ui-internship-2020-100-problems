/**
 * @param {string} string
 * @param {string} insertWord
 * @param {number} position
 * @return {string}
 * @description "Insert a string within a string at a particular position."
 */

export function insert(string, insertWord = '', position = 0) {
  return string.slice(0, position) + insertWord + string.slice(position);
}
