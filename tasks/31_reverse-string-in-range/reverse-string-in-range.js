export function reverseStringInRange(str, arr) {
  return str.substring(0, arr[0])
    + str.substring(arr[0], arr[1] + 1)
        .split('')
        .reverse()
        .join('')
    + str.substring(arr[1] + 1);
}
