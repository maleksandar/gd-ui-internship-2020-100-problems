export function humanizeFormat(number) {
  if (!number) return '';
  else {
    const lastDigit = number % 10;
    if (lastDigit === 1) {
      return number.toString() + 'st';
    } else if (lastDigit === 2) {
      return number.toString() + 'nd';
    } else if (lastDigit === 3) {
      return number.toString() + 'rd';
    } else {
      return number.toString() + 'th';
    }
  }
}
