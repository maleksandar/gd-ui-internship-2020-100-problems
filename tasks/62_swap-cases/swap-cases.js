export function swapCases(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i].match(/[A-Z]/)) {
      result += string[i].toLowerCase();
    } else {
      result += string[i].toUpperCase();
    }
  }

  return result;
}
