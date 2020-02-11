export const confirmEnding = (str, endingWith) => {
  if (str.substr(-endingWith.length) === endingWith) {
    return true;
  }
  return false;

  // str.substr(-endingWith.length) === endingWith ? true : false;
};
