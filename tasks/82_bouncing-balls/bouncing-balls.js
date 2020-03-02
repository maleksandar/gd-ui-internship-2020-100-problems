export function bouncingBall(h, bounce, window) {
  let timesTheBallIsSeen = 0;
  let height = h;

  if (bounce <= 0 || bounce >= 1 || window > h || h < 0) {
    return -1;
  }

  do {
    timesTheBallIsSeen++;
    height *= bounce;
  } while (height > window);

  return timesTheBallIsSeen * 2 - 1;
}
