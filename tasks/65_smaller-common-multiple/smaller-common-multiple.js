export function smallestCommons(arr) {
  arr = arr[0] < arr[1]? arr : [...arr].reverse();
  let lcm = arr[0];
  for (let i = arr[0] + 1; i < arr[1]; i++) {
    lcm = (lcm * i) / getGdc(lcm, i);
  }
  return lcm;
}

function getGdc(a, b) {
  if (b === 0) {
    return a;
  }
  getGdc(b, a % b);
}
