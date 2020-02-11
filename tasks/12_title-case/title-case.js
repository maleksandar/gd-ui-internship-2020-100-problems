export const titleCase = (string) => {
  return string.split(' ')
      .map((word) => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(' ');
};
