export function humanizeFormat(num) {
  if (num === undefined) return '';

  const firstDigit = num % 10;
  const secondDigit = (num / 10) % 10;

  switch (firstDigit) {
    case 1:
      return secondDigit === 1? num + 'th' : num + 'st';
    case 2:
      return secondDigit === 1? num + 'th' : num + 'nd';
    case 3:
      return secondDigit === 1? num + 'th' : num + 'rd';
    default:
      return num + 'th';
  }
}
