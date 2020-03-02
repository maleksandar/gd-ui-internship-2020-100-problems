export function smallestCommons([from, to]) {
  (from > to) && ([from, to] = [to, from]);
  let lcm = from;

  for (let i = from + 1; i <= to; i++) {
    lcm = (i * lcm) / gcd(i, lcm);
  }
  return lcm;
}

function gcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return gcd(num2, num1 % num2);
}
