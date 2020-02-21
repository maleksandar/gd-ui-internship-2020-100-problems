export function truncateString(str, maxLength) {
  if (maxLength <= 3) {
    return str.slice(0, maxLength) + '...';
  } else if (maxLength < str.length) {
    return str.slice(0, maxLength - 3) + '...';
  }
  return str;
}
