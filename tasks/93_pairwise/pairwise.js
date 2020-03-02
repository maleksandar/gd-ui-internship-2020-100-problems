export const pairwise = (arr, arg) => {
  if (arr.length === 0) {
    return 0;
  }

  let copy = [...arr];

  return copy.reduce((prev, curr, index) => {
    const diff = arg - curr;
    const diffIndex = copy.indexOf(diff);

    if (diffIndex !== -1 && diffIndex !== index) {
      const total = index + diffIndex;
      copy.splice(index, 1, NaN);
      copy.splice(diffIndex, 1, NaN);
      return prev + total;
    }

    return prev;
  }, 0);
};
