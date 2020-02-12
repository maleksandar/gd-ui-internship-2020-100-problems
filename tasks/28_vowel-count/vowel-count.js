export function getVowelCount(string) {
  return ((string.match(/a|e|i|o|u/g) || []).length);
}
