export function translatePigLatin(word) {
  const firstLetter = word.charAt(0);
  if (isVowel(firstLetter)) {
    return word + 'way';
  } else {
    const indexOfVowel = word.search(/[aeiouAEIOU]/i);
    const consonantCluster = word.slice(0, indexOfVowel);
    const wordWithoutConsonantCluster = word.slice(indexOfVowel);
    return wordWithoutConsonantCluster + consonantCluster + 'ay';
  }
}

function isVowel(letter) {
  return 'aeiouAEIOU'.indexOf(letter) !== -1;
}

