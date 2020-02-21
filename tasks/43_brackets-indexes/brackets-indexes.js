export function findCloseIndex(str, bracketInd) {
  if (str[bracketInd] === '(') {
    let flag = 1;
    for (let i = bracketInd + 1; i < str.length; i++) {
      if (str[i] === ')') flag--;
      if (str[i] === '(') flag++;
      if (flag === 0) return i;
    }
  }
  return -1;
}
