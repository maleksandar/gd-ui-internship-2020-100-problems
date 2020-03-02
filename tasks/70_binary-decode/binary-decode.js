export function binaryDecode(binaryString) {
  if (binaryString === undefined) {
    return '';
  }

  let binStringSplit = binaryString.split(' ');
  let result = '';

  binStringSplit.forEach((element) => {
    result += String.fromCharCode(parseInt(element, 2));
  });

  return result;
}
