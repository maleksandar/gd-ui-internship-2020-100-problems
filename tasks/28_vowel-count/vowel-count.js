export const getVowelCount = (string) => {
  return [...string]
      .filter((char) => ['a', 'e', 'i', 'o', 'u']
          .includes(char.toLowerCase())).length;
};
