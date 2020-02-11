export const abbreviated = str => {
  var words = str.split(" ");
  if (words.length <= 1) {
    return words[0];
  } else if (words.length == 2) {
    return words[0] + " " + words[1].slice(0, 1) + ".";
  } else if (words.length == 3) {
    return (
      words[0] + " " + words[1].slice(0, 1) + ". " + words[2].slice(0, 1) + "."
    );
  }
};
