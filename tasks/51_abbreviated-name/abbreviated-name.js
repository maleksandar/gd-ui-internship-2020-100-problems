export const abbreviated = str => {
  var words = str.split(" ");
  let restOfStr = "";
  if (words.length <= 1) {
    return words[0];
  } else if (words.length >= 2) {
    for (let i = 1; i < words.length; i++) {
      restOfStr += `${words[i].slice(0, 1)}. `;
    }
    return `${words[0]} ${restOfStr}`;
  }
};
