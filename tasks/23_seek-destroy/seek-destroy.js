export const destroyer = (arr, ...valsToRemove) =>
  arr.filter(elem => !valsToRemove.includes(elem));
