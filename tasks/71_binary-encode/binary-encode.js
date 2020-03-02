export function binaryEncode(string) {
  if (string === undefined) {
    return '';
  }

  return string.split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
}
