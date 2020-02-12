export function destroyer(array, ...args) {
  return array.filter((item) => args.indexOf(item) === -1);
}
