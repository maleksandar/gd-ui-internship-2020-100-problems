export function findLetter(string) {
  let charCodeAtPrevLetter = string.charCodeAt(0);

  for (let i = 1; i < string.length; i++) {
    let charCodeAtCurrentLetter = string.charCodeAt(i);
    if (charCodeAtCurrentLetter - charCodeAtPrevLetter !== 1) {
      return String.fromCharCode(charCodeAtPrevLetter + 1);
    }
    charCodeAtPrevLetter = charCodeAtCurrentLetter;
  }
}
