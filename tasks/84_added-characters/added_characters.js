/**
 * @param {Array<number>} string1
 * @param {Array<number>} string2
 * @return {number}
 * @description "Given two strings, the first being a random string
 * and the second being the same as the first with added three characters (same)
 * somewhere in the string. The function finds the added character."
 */
export function addedChar(string1, string2) {
  for (let i = 0; i < string2.length; i++) {
    if (string2[i] !== string1[i]) {
      return string2[i];
    }
  }
  return string2[string1.length];
}
