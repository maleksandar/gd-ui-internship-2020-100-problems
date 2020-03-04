

export function addedChar(str1, str2) {
  for (let i=0; i<str2.length; i++) {
    if (str2[i] != str1[i]) {
      return str2[i];
    }
  }
}
