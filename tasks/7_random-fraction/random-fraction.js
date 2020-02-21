let prev;
export function randomFraction() {
  let curr = Math.random();
  if (prev !== curr) {
    prev = curr;
    return curr;
  }
  return randomFraction();
}
