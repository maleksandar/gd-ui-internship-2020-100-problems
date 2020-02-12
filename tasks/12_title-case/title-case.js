export function titleCase(string) {
  return string
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase()
      + word.substring(1).toLowerCase())
      .join(' ');
}
