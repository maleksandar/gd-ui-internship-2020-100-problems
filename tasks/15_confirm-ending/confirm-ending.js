export const confirmEnding = (string, target) => {
  return (
    string.length >= target.length &&
    string.substr(string.length - target.length) === target
  );
};
