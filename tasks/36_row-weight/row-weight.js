export const rowWeights = arr => {
  let total1 = 0;
  let total2 = 0;

  for (let i = 0; i < arr.length; i += 2) {
    let elem = arr[i];
    if (i % 2 === 0) {
      total1 += elem;
    } else {
      total2 += elem;
    }
  }
  return [total1, total2];
};
