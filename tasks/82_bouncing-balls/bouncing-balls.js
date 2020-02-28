

export function bouncingBall(h, bounce, window) {
  if (h<= 0 || bounce > 1 || bounce <0 || window>h) return -1;

  let currentBounce = h*bounce;
  let sigthsOfABall = 1;

  while (currentBounce>window) {
    sigthsOfABall+=2;
    currentBounce*=bounce;
  }

  return sigthsOfABall;
}
