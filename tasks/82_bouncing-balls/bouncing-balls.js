export function bouncingBall(h, bounce, window) {
  if (bounce < 0 || bounce >= 1 || window > h) {
    return -1;
  }
  let timesMotherSeesBall = 1;
  let bounceHeight = getBounceHeight(h, bounce);
  while (bounceHeight > window) {
    timesMotherSeesBall += 2;
    bounceHeight = getBounceHeight(bounceHeight, bounce);
  }
  return timesMotherSeesBall;
}

function getBounceHeight(h, bounce) {
  return h * bounce;
}
