export const spinalCase = sen => {
  return sen
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
};
