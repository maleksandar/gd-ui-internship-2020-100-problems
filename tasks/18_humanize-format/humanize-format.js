export const humanizeFormat = (...args) => {
  if (args.length === 0) {
    return '';
  }

  const number = args[0].toString();
  const lastDigit = number.slice(-1);

  if (lastDigit === '1') {
    return number.concat('st');
  } else if (lastDigit === '2') {
    return number.concat('nd');
  } else if (lastDigit === '3') {
    return number.concat('rd');
  }

  return number.concat('th');
};
