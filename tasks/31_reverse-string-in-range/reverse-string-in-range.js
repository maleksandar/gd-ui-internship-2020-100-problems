export function reverseStringInRange(string, [from, to]) {
  return string.slice(0, from)
    + string.slice(from, to + 1).split('').reverse().join('')
    + string.slice(to + 1);
}
