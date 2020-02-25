export function myReplace(str, before, after) {
  if (isFirstLetterUpper(before)) {
    after = after[0].toUpperCase() + after.slice(1);
  } else {
    after = after[0].toLowerCase() + after.slice(1);
  }
  return str.replace(before, after);
}

function isFirstLetterUpper(str) {
  return str[0] === str[0].toUpperCase();
}
