export function myReplace(str, before, after) {
  let afterStr;
  if (isFirstLetterUpper(before)) {
    afterStr = after[0].toUpperCase() + after.slice(1);
  } else {
    afterStr = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, afterStr);
}

function isFirstLetterUpper(str) {
  return str[0] === str[0].toUpperCase();
}
