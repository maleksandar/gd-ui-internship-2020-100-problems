export const truncateString = (string, length) => {
  if (length <= 3) {
    return string.slice(0, length).concat('...');
  } else if (length < string.length) {
    return string.slice(0, length - 3).concat('...');
  }

  return string;
};
