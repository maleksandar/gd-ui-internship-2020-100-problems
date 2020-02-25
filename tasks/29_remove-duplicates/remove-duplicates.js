

export function removeDuplicates(array) {
  return array.filter((number, index) => array.indexOf(number) === index);
}
