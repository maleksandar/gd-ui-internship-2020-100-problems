export const validBraces = braces => {
  var pairs = {
    "(": ")",
    "{": "}",
    "[": "]"
  };
  if (braces.length % 2 !== 0) {
    return false;
  }
  if (braces.length === 2) {
    if (pairs[braces[0]] !== braces[1]) {
      return false;
    } else {
      return true;
    }
  } else {
    for (var i = 0; i < braces.length; i++) {
      if (pairs[braces[i]] === braces[i + 1]) {
        var newBraces = braces.slice(0, i) + braces.slice(i + 2);
        return validBraces(newBraces);
      }
    }
    return false;
  }
};
