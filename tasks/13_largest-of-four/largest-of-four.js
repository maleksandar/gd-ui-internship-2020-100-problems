export const largestOfFour = (arrays) => {
  let res = [];
  arrays.forEach((arr) => res.push(Math.max(...arr)));
  return res;
};
