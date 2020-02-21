export function titleCase(str) {
  // Splits string into array of words and then
  // transforms firt letter of every word to UpperCase and
  // other letters to lowerCase
  return str.split(' ')
      .map((el) => el.charAt(0).toUpperCase() +
                  el.slice(1).toLowerCase())
      .join(' ');
}
