export function truncateString(str, maxLength) {
  if (str.length > maxLength && maxLength > 3) {
    return str.slice(0, maxLength - 3) + '...';
  } else if (maxLength < 3) {
    return str.slice(0, maxLength) + '...';
  }
  return str;
}
