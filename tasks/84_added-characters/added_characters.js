export function addedChar(str, changedStr) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== changedStr[i]) {
      return changedStr[i];
    }
  }
}
