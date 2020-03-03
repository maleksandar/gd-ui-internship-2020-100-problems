export function translatePigLatin(str) {
  let consonantCluster = '';

  if (isVowel(str[0])) {
    return str + 'way';
  }
  for (let i = 0; i < str.length; i++) {
    if (!isVowel(str[i])) {
      consonantCluster += str[i];
    } else {
      const strWithoutConsonant = str.slice(consonantCluster.length);
      return strWithoutConsonant + consonantCluster + 'ay';
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
