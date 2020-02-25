export function translatePigLatin(str) {
  let consonatCluster = '';

  if (isVowel(str[0])) {
    return str + 'way';
  }
  for (let i = 0; i < str.length; i++) {
    if (!isVowel(str[i])) {
      consonatCluster += str[i];
    } else {
      const strWithoutConsonat = str.slice(consonatCluster.length);
      return strWithoutConsonat + consonatCluster + 'ay';
    }
  }
}

function isVowel(char) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === char) return true;
  }
  return false;
}
