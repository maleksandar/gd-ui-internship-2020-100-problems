export function sumFibs(num) {
  let prev = 1;
  let next = 1;
  let sumOfFibs = 1;
  while (num >= next) {
    if (next % 2 === 1) {
      sumOfFibs += next;
    }
    next += prev;
    prev = next - prev;
  }
  return sumOfFibs;
}
