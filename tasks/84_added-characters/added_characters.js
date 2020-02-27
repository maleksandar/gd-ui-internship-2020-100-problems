export const addedChar = (str1, str2) => {
  return str2[[...str2].findIndex((el, index) => el !== str1[index])];
};
