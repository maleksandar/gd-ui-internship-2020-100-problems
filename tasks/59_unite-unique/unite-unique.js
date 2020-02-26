export const uniteUnique = (...args) => {
  const arrays = [...args];
  const uniqueArgs = [];
  arrays.forEach(arr => uniqueArgs.push(...arr));
  return [...new Set(uniqueArgs)];
};
