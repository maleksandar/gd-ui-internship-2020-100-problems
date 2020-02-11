export const checkLetters = (arr) => {
  const string = arr[0].toLowerCase();
  const search = arr[1].toLowerCase();

  for (let i = 0; i < search.length; i++) {
    if (string.indexOf(search[i]) === -1) {
      return false;
    }
  }

  return true;
};
