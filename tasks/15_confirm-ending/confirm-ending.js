
export function confirmEnding(str, ending) {
  return (str.substring(str.length - ending.length, str.length) === ending);
}
