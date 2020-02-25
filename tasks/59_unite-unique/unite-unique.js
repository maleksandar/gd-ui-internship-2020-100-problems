export const uniteUnique = (...arrays) => {
  let unique = [];
  arrays.forEach((arr) => unique.push(...arr));
  return unique.filter((item, position) => unique.indexOf(item) === position);
};

// Alternative solution using Set()
export const uniteUnique2 = (...arrays) => {
  let unique = [];
  arrays.forEach((arr) => unique.push(...arr));
  // eslint-disable-next-line no-undef
  return [...new Set(unique)];
};
