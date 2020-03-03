/**
 * @param {string} string
 * @return {string}
 * @description "Converts a string to spinal case
 * (all lowercase words joined by dashes)."
 */

export function spinalCase(string) {
  // Regex matches: ['-', ' ', '_'] and recognizes camelCase breakings
  const words = string.split(/-|_|\s|(?=[A-Z])/);

  return words.map((word) => word.toLowerCase()).join('-');
}
