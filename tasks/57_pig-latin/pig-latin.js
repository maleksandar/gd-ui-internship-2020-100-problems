

export function translatePigLatin(strInput) {
  let ret = strInput.split('');
  let suffix = [];


  while (ret[0] !== 'a' &&
      ret[0] !== 'e' &&
      ret[0] !== 'i' &&
      ret[0] !== 'o' &&
      ret[0] !== 'u'
  ) {
    suffix.push(ret[0]);
    ret.shift();
  }

  if (suffix.length === 0) {
    suffix.push('way');
  } else {
    suffix.push('ay');
  }

  return ret.join('') + suffix.join('');
}
