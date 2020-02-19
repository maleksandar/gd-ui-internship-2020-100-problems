export const getVowelCount = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const copy = [...string];
  const filtered = copy.filter((char) => vowels.includes(char.toLowerCase()));
  return filtered.length;
};
