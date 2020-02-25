

export function checkLetters(array) {
  let [first, second] = [array[0].toLowerCase(), array[1].toLowerCase()];

  for (let i = 0; i < second.length; i++) {
    if (first.indexOf(second.charAt(i)) == -1) return false;
  }

  return true;
}
