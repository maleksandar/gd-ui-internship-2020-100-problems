export function findLetter(string) {
  if (String.fromCharCode(97) !== string[0]) {
    return undefined;
  }

  for (let i = 0; i < string.length - 1; i++) {
    if (string.charCodeAt(i + 1) - string.charCodeAt(i) > 1) {
      return String.fromCharCode(string.charCodeAt(i) + 1);
    }
  }
}
