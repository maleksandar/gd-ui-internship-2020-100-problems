export const translatePigLatin = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'y'];

  if (vowels.indexOf(string[0]) > -1) {
    string += 'way';
    return string;
  }

  for (let i = 0; i < string.length; i++) {
    if (vowels.indexOf(string[i]) > -1) {
      const firstConsonants = string.slice(0, i);
      const middle = string.slice(i, string.length);
      string = middle + firstConsonants + 'ay';
      break;
    }
  }

  return string;
};
