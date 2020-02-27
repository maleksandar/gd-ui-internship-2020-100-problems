export function binaryEncode(text) {
  if (text === undefined) {
    return '';
  }
  return text.split('')
      .map((char) => char.charCodeAt(0).toString(2).padStart(8, '0'))
      .join(' ');
}
