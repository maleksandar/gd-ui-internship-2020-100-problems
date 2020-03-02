/**
 * @param {string} number
 * @return {boolean}
 * @description "Checks if the passed string is a valid US phone number."
 */

export function telephoneCheck(number) {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})(\s?|-)(\d{3})(\s*|-)(\d{4})$/g;

  return regex.test(number);
}
