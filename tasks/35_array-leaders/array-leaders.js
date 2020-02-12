export function arrayLeaders(array) {
  return array.filter((item, index, array) => {
    let rightElems = array.slice(index + 1);
    let sumOfRightElems = rightElems.reduce((acc, num) => acc + num, 0);
    return item > sumOfRightElems;
  });
}
