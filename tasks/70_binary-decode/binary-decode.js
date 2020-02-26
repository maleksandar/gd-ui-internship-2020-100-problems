

export function binaryDecode(str) {
  if (str === undefined) return '';
  let words = str.split(' ');
  words = words.map( (element) => String.fromCharCode(parseInt(element, 2)));
  return words.join('');
}
