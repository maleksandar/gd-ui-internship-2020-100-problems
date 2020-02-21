export function humanizeFormat(num) {
  if (num === undefined) return '';

  const lastDigit = num % 10;
  const secondLastDigit = num % 100;

  switch (lastDigit) {
    case 1:
      return secondLastDigit === 11? num + 'th' : num + 'st';
    case 2:
      return secondLastDigit === 12? num + 'th' : num + 'nd';
    case 3:
      return secondLastDigit === 13? num + 'th' : num + 'rd';
    default:
      return num + 'th';
  }
}
