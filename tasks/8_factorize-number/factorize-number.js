// export const factorialize = (n) => {
//   let fact = 1;
//
//   for (let i = 2; i <= n; i++) {
//     fact *= i;
//   }
//
//   return fact;
// };

export const factorialize = (n) => {
  if (n === 0) {
    return 1;
  }

  return factorialize(n - 1) * n;
};
