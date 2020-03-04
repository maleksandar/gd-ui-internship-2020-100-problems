/**
 * @param {string} string
 * @return {string}
 * @description "Checks if a given string is a palindrome."
 */

export function palindrome(string) {
  const alphanumericString = string.replace(/[^a-z0-9]/ig, '').toLowerCase();
  const reverseString = alphanumericString.split('').reverse().join('');
  return alphanumericString === reverseString;
}
