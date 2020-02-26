export const myReplace = (sen, before, after) => {
  const index = sen.indexOf(before);
  if (sen[index] === sen[index].toUpperCase()) {
    after = `${after.charAt(0).toUpperCase()}${after.slice(1)}`;
  }
  sen = sen.replace(before, after);

  return sen;
};
