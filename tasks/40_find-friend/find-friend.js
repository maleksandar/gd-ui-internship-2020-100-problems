export const findFriend = line => {
  let friendMask = "red";
  let counter = 0;

  for (let i = 0; i < line.length; i++) {
    let elem = line[i];
    if (elem === friendMask) {
      if (line[i - 1] === "blue" && line[i + 1] === "blue") {
        counter += 1;
      } else if (line[i + 1] === "blue" && line[i + 2] === "blue") {
        counter += 1;
      } else if (line[i - 1] === "blue" && line[i - 2] === "blue") {
        counter += 1;
      }
    }
  }
  return counter;
};
