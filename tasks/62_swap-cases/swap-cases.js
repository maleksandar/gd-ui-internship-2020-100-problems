export function swapCases(str) {
  return str.split('').map((char) => {
    return char === char.toUpperCase()?
       char.toLowerCase() : char.toUpperCase();
  }).join('');
}
