

export function swapCases(str) {
  const codeForLowerA = 'a'.charCodeAt(0);
  const codeForCapitalA = 'A'.charCodeAt(0);
  const difference = codeForLowerA - codeForCapitalA;

  let ret = '';
  for (let i=0; i<str.length; i++) {
    if (str[i].match(/[a-z]|[A-Z]/g) !== null) { // if letter
      if (str.charCodeAt(i) < codeForLowerA) { // if  uppercase
        ret += String.fromCharCode( str.charCodeAt(i) + difference );
      } else {
        ret += String.fromCharCode( str.charCodeAt(i) +-difference );
      }
    } else { // if not a letter
      ret+= str[i];
    }
  }

  return ret;
}
