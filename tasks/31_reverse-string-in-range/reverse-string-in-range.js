export const reverseStringInRange = (string, range) => {
  const start = string.substring(0, range[0]);
  const mid = string.substring(range[0], range[1] + 1);
  const end = string.substring(range[1] + 1, string.length);
  return start.concat(mid.split('').reverse().join('')).concat(end);
};
