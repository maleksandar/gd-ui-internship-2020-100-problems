

export function getNumbers(text) {
  return text.match(/\d+/g).map((elem) => parseInt(elem));
}
