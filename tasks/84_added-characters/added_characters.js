export const addedChar = (string1, string2) => {
  const index = [...string2].findIndex((char, idx) => char !== string1[idx]);
  return string2[index];
};
