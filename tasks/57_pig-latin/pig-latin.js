export function translatePigLatin(string) {
  let vowelIndex = 0;

  if (string[0].match(/[aeiou]/)) {
    return string + 'way';
  } else {
    for (let char of string) {
      if (char.match(/[aeiou]/)) {
        vowelIndex = string.indexOf(char);
        break;
      }
    }
    return string.slice(vowelIndex) + string.slice(0, vowelIndex) + 'ay';
  }
}
