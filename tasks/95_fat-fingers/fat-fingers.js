export function fatFingers(str) {
  let isCapsLockOn = false;
  return str.split('').map((c) => {
    if (c === 'a' || c === 'A') {
      isCapsLockOn = !isCapsLockOn;
      return '';
    } else if (isCapsLockOn) {
      return c === c.toUpperCase()? c.toLowerCase() : c.toUpperCase();
    }
    return c;
  }).join('');
}
