export function smallestCommons(arr) {
  const sortedArr = arr[0] < arr[1]? [...arr] : [...arr].reverse();
  let lcm = sortedArr[0];
  for (let i = sortedArr[0] + 1; i <= sortedArr[1]; i++) {
    lcm = (lcm * i) / getGcd(lcm, i);
  }
  return lcm;
}

function getGcd(a, b) {
  if (!b) {
    return a;
  }
  return getGcd(b, a % b);
}
