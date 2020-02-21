export function factorialize(num) {
  let x = 1;
  for (let i=num; i>1; i--) {
    x *= i;
  }
  return x;
}
