export function sumFibs(num) {
  let first = 1;
  let second = 1;
  let sumOfFibs = 1;
  while (num >= second) {
    if (second % 2 === 1) {
      sumOfFibs += second;
    }
    let temp = second;
    second += first;
    first = temp;
  }
  return sumOfFibs;
}
