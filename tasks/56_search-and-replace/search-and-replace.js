export const myReplace = (string, before, after) => {
  const index = string.indexOf(before);
  const firstLetter = string[index][0];

  if (isUpperCase(firstLetter)) {
    const rest = [...after].splice(1).join('');
    const newAfter = after[0].toUpperCase() + rest;
    return string.replace(before, newAfter);
  }

  return string.replace(before, after);
};

const isUpperCase = (char) => {
  return char === char.toUpperCase();
};
