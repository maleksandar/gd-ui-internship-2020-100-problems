export const updateInventory = (arr1, arr2) => {
  let currInventory = [];
  let newInventory = [];

  arr1.map((elem1) =>
    arr2.map((elem2) => {
      if (elem1[1] === elem2[1]) {
        elem1[0] += elem2[0];
      }
    }));

  arr2.map((item) => newInventory.push(item[1]));
  arr1.map((item) => currInventory.push(item[1]));

  newInventory.map((item) => {
    if (currInventory.indexOf(item) === -1) {
      const index = newInventory.indexOf(item);
      arr1.push(arr2[index]);
    }
  });

  arr1.sort((a, b) => a[1] > b[1] ? 1 : -1);
  return arr1;
};
