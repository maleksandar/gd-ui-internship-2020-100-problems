export const rot13 = str => {
  str.toUpperCase();
  var newStr = "";
  for (i = 0; i < str.length; i++) {
    var ch = str.charCodeAt(i);
    if (ch < 65 || ch > 90) {
      newStr += String.fromCharCode(ch);
    } else if (ch >= 65 && ch <= 77) {
      newStr += String.fromCharCode(str.charCodeAt(i) + 13);
    } else if (ch >= 78 && ch <= 90) {
      newStr += String.fromCharCode(str.charCodeAt(i) - 13);
    }
  }
  return newStr;
};
