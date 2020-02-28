export const fatFingers = str => {
  let newStr = "";
  let capsOn = false;
  if (str === null) {
    return null;
  }
  if (str.length < 1) {
    return "";
  }

  for (let i = 0; i < str.length; i++) {
    if (aFinder(str[i])) {
      capsOn = !capsOn;
      continue;
    } else {
      if (capsOn) {
        newStr += oppositeCase(str[i]);
      } else {
        newStr += str[i];
      }
    }
  }

  return newStr;
};

let aFinder = function(letter) {
  if (letter === "a" || letter === "A") {
    return true;
  } else {
    return false;
  }
};

let oppositeCase = function(letter) {
  let lower = "abcdefghijklmnopqrstuvwxyz";
  let upper = lower.toUpperCase();
  if (lower.indexOf(letter) !== -1) {
    return letter.toUpperCase();
  } else if (upper.indexOf(letter) !== -1) {
    return letter.toLowerCase();
  } else {
    return letter;
  }
};
