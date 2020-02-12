export function maxProduct(array) {
  let prodOfFirstTwo = array[0] * array[1];

  return array.slice(1).reduce((maxProd, num, index, array) => {
    let adjProd = num * array[index - 1];
    return adjProd > maxProd ? adjProd : maxProd;
  }, prodOfFirstTwo);
}
