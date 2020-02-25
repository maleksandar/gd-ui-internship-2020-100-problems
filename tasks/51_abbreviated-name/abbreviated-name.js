export const abbreviated = (string) => {
  const parts = string.split(' ');
  let result = parts[0];

  if (parts.length > 1) {
    for (let i = 1; i < parts.length; i++) {
      result += ` ${parts[i].charAt(0)}.`;
    }
  }

  return result;
};
