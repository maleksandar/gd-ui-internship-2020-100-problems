export function abbreviated(string) {
  let words = string.split(' ');
  let abbreviatedString = words[0];

  for (let i = 1; i < words.length; i++) {
    if (words[i].match(/[A-Z]/)) {
      abbreviatedString += ' ' + words[i].charAt(0) + '.';
    }
  }

  return abbreviatedString.trim();
}
