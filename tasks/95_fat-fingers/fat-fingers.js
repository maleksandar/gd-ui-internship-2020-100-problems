export function fatFingers(string) {
  let strSplit = string.split('');
  let result = '';
  let isCharA = false;

  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i] === 'a' || strSplit[i] === 'A') {
      isCharA = !isCharA;
    } else {
      if (isCharA) {
        result += oppositeCase(strSplit[i]);
      } else {
        result += strSplit[i];
      }
    }
  }
  return result;
}


function oppositeCase(letter) {
  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = lower.toUpperCase();

  if (lower.indexOf(letter) !== -1) {
    return letter.toUpperCase();
  } else if (upper.indexOf(letter) !== -1) {
    return letter.toLowerCase();
  } else {
    return letter;
  }
}

