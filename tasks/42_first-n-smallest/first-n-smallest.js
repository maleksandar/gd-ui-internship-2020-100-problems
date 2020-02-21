Array.min = (array, n) => {
  return array
    .sort((a, b) => {
      return a - b;
    })
    .slice(0, n);
};
