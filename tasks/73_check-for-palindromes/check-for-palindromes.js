

export function palindrome(strInput) {
  let str = strInput.toLowerCase();
  str = str.split('').filter((char) => (char.match(/[a-z]|[0-9]/g)));
  for (let i=0; i<str.length / 2; i++) {
    if (str[i] !== str[str.length - i -1]) return false;
  }
  return true;
}
