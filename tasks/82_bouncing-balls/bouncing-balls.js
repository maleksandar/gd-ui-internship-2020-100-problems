export const bouncingBall = (h, bounce, window) => {
  if (bounce >= 1 || bounce < 0 || window > h) return -1;

  let count = 0;

  while (h > window) {
    h = h * bounce;
    count += 2;
  }
  return count - 1;
};
