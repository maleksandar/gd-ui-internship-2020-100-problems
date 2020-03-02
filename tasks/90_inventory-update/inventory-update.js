export function updateInventory(curInv, newInv) {
  let result = [];

  curInv.map((item1) => {
    newInv.map((item2) => {
      if (item1[1] === item2[1]) {
        item2[0] = item1[0] + item2[0];
        result.push(item2);
      }
    });
  });

  curInv.map((item1) => {
    let brojac = 0;
    result.map((item2) => {
      if (item1[1] !== item2[1]) {
        brojac++;
      }
    });
    if (brojac === result.length) {
      result.push(item1);
    }
  });

  newInv.map((item1) => {
    let brojac = 0;
    result.map((item2) => {
      if (item1[1] !== item2[1]) {
        brojac++;
      }
    });
    if (brojac === result.length) {
      result.push(item1);
    }
  });

  return result.sort((a, b)=> a[1]>b[1]? 1:-1);
}

