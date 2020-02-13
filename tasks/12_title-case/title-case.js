export function titleCase(string) {
  return string
      .split(' ')
      .map(capitalizeWord)
      .join(' ');

  function capitalizeWord(word) {
    return word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
  }
}
