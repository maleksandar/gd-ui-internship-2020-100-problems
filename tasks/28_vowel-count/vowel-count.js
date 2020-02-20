export function getVowelCount(str) {
  return [...str].filter((el) => ['a', 'e', 'i', 'o', 'u'].includes(el)).length;
}
