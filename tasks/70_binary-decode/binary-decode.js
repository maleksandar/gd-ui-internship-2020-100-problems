export function binaryDecode(binaryCode) {
  if (binaryCode === undefined) {
    return '';
  }
  return binaryCode
      .split(' ')
      .map((char) => {
        return String.fromCharCode(parseInt(char, 2));
      })
      .join('');
}
