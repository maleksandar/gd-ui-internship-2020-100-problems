// FIXME: ESLint config doesn't allow to
// name a variable without the camelcase syntax
// eslint-disable-next-line camelcase
export const validate_bet = (range, message) => {
  const filtered = message.split(/[,\s]/g).filter((elem) => elem);

  for (let i = 0; i < filtered.length; i++) {
    if (
      filtered.length < range[0] ||
      filtered[i] > range[1] ||
      isNaN(filtered[i])
    ) {
      return 'None';
    }
  }

  return filtered.sort();
};

// eslint-disable-next-line camelcase
export const validate_bet2 = (range, message) => {
  let filtered = message.split(/[,\s]/g).filter((elem) => elem);
  const areAllNumbers = filtered.every((elem) => !isNaN(elem));
  const length = filtered.length;

  filtered.sort();

  if (!areAllNumbers || length < range[0] || filtered[length - 1] > range[1]) {
    return 'None';
  }

  return filtered;
};
