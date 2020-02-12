export function factorialize(n) {
  let fac = 1;
  for (let i = 2; i <= n; i++) fac *= i;

  return fac;
}

// recursive
// export function factorialize(n){
//     return (n < 2) ? 1 : factorialize(n-1) * n;
// }
