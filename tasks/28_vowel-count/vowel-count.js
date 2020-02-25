export function getVowelCount(str) {
  return ((str.match(/a|e|i|o|u/g) || []).length);
}
