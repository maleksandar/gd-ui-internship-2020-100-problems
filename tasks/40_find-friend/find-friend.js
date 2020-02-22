export const findFriend = line => {
  let friendMask = "red";
  let colorCheck = "blue";
  let counter = 0;

  for (let i = 0; i < line.length; i++) {
    let elem = line[i];
    if (elem === friendMask) {
      if (line[i - 1] === colorCheck) {
        if (line[i - 2] === colorCheck || line[i + 1] === colorCheck) {
          counter++;
        }
      } else if (line[i + 1] === colorCheck) {
        if (line[i + 2] === colorCheck || line[i - 1] === colorCheck) {
          counter++;
        }
      }
    }
  }
  return counter;
};
