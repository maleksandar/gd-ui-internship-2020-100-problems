export const bouncingBall = (height, bounce, window) => {
  if (bounce >= 1 || bounce < 0 || window > height) {
    return -1;
  }

  let count = 0;

  while (height > window) {
    height *= bounce;
    count += 2;
  }

  return count - 1;
};
