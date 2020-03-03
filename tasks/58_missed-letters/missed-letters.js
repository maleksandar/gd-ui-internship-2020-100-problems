export function findLetter(abc) {
  for (let i = 0; i < abc.length - 1; i++) {
    if (abc.charCodeAt(i) !== abc.charCodeAt(i + 1) - 1) {
      return String.fromCharCode(abc.charCodeAt(i) + 1);
    }
  }
}
