export const translatePigLatin = str => {
  if (isVowel(str.charAt(0))) return `${str}way`;
  var front = [];
  str = str.split(""); // t e s t
  while (str.length && !isVowel(str[0])) {
    front.push(str.shift());
  }
  return `${[].concat(str, front).join("")}ay`;
};

const isVowel = strChar => {
  return ["a", "e", "i", "o", "u"].indexOf(strChar.toLowerCase()) !== -1;
};
