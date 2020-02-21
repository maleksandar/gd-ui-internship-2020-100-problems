export const destroyer = (arr, ...args) => {
  return arr.filter((elem) => ![...args].includes(elem));
};
