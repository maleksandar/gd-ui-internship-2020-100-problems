export const sumFibs = (number) => {
  if (number < 0) {
    return -1;
  }

  if (number === 0 || number === 1) {
    return 1;
  }

  let prev = 0;
  let curr = 1;
  let result = 0;

  while (curr <= number) {
    if (curr % 2 !== 0) {
      result += curr;
    }

    curr += prev;
    prev = curr - prev;
  }

  return result;
};
