export function truncateString(string, maxLength) {
  if (string.length <= maxLength) return string;

  if (maxLength <= 3) return string.slice(0, maxLength) + '...';

  return string.slice(0, maxLength - 3) + '...';
}
