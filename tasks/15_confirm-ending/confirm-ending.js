export const confirmEnding = (str, endingWith) => {
  return str.substr(-endingWith.length) === endingWith;
};
