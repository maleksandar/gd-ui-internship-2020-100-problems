export const removeDuplicates = (arr) => {
  let unique = {};
  let result = [];

  arr.forEach((item) => {
    if (!unique[item]) {
      unique[item] = true;
      result.push(item);
    }
  });

  return result;
};
