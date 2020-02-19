export const reverseStringInRange = (string, range) => {
  const start = string.substring(0, range[0]);
  const mid = string.substring(range[0], range[1] + 1);
  const midReversed = mid.split('').reverse().join('');
  const end = string.substring(range[1] + 1, string.length);
  return start.concat(midReversed).concat(end);
};
