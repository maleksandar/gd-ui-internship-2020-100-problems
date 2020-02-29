export function addedChar(original, withAddedChar) {
  for (let i = 0; i < original.length; i++) {
    if (original[i] != withAddedChar[i]) {
      return withAddedChar[i];
    }
  }
  return withAddedChar[original.length];
}
