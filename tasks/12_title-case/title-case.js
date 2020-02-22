export const titleCase = str => {
  const strArray = str.split(" ");

  for (let i = 0; i < strArray.length; i++) {
    strArray[i] =
      strArray[i].substring(0, 1).toUpperCase() +
      strArray[i].substring(1).toLowerCase();
  }

  return strArray.join(" ");
};
