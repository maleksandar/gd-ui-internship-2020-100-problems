export function getNumbers(string) {
  return string.match(/\d/g).map((element) => {
    return parseInt(element);
  });
}
