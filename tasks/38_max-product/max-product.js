export const maxProduct = (arr) => {
  const n = arr.length;
  let product = 0;
  let maxProduct = -Infinity;

  for (let i = 0; i < n - 1; i++) {
    product = arr[i] * arr[i + 1];

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};
