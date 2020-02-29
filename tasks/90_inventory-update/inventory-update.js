export function updateInventory(inv, newInv) {
  newInv.forEach((item) => {
    const ind = getIndexOfItem(inv, item);
    if (ind === -1) {
      inv.push(item);
    } else {
      inv[ind][0] += item[0];
    }
  });
  inv.sort((a, b) => a[1] > b[1]? 1 : -1);
  return inv;
}
function getIndexOfItem(inventory, item) {
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i][1] === item[1]) {
      return i;
    }
  }
  return -1;
}
