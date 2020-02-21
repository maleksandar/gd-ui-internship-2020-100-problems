export const maxProduct = (arr) => {
  const arrayLength = arr.length;
  let product = 0;
  let maxProduct = arr[0] * arr[1];

  for (let i = 1; i < arrayLength - 1; i++) {
    product = arr[i] * arr[i + 1];

    if (product > maxProduct) {
      maxProduct = product;
    }
  }

  return maxProduct;
};
