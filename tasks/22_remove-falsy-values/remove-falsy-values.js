export const removeFalsyValues = (arr) => {
  return arr.filter((elem) => ![false, null, 0, NaN, undefined, '']
      .includes(elem));
};
