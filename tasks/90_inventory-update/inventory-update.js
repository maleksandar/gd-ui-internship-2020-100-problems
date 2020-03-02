/**
 * @param {Array<[number, string]>} currentInventory
 * @param {Array<[number, string]>} newInventory
 * @return {Array<[number, string]>}
 * @description "Compares and updates the inventory stored in a 2D array
 * against a second 2D array of a fresh delivery."
 */

export function updateInventory(currentInventory, newInventory) {
  const mapOfItemsAndQuantities = Object.create(null);

  for (let i = 0; i < currentInventory.length; i++) {
    const currentItem = currentInventory[i][1];
    const currentQuantity = currentInventory[i][0];
    mapOfItemsAndQuantities[currentItem] = currentQuantity;
  }

  for (let i = 0; i < newInventory.length; i++) {
    const newItem = newInventory[i][1];
    const newQuantity = newInventory[i][0];
    if (mapOfItemsAndQuantities[newItem]) {
      mapOfItemsAndQuantities[newItem] += newQuantity;
    } else {
      mapOfItemsAndQuantities[newItem] = newQuantity;
    }
  }

  const items = Object.keys(mapOfItemsAndQuantities);
  items.sort();
  const updatedInventory = [];

  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    const quantity = mapOfItemsAndQuantities[items[i]];
    updatedInventory.push([quantity, item]);
  }

  return updatedInventory;
}
