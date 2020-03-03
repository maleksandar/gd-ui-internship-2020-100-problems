/**
 * @param {string} string
 * @return {string}
 * @description "Freddy has a really fat left pinky finger,
 * and every time Freddy tries to type an 'a',
 * he accidentally hits the CapsLock key!
 * Given a string that Freddy wants to type,
 * emulates the keyboard misses where each 'a' supposedly pressed is
 * replaced with CapsLock, and returns the string that Freddy actually types."
 */
export function fatFingers(string) {
  let capsLock = false;
  const resultString = [];

  for (let i = 0; i < string.length; i++) {
    if (['a', 'A'].includes(string[i])) {
      capsLock = !capsLock;
    } else if (capsLock) {
      resultString.push(reverseCapitalization(string[i]));
    } else if (!capsLock) {
      resultString.push(string[i]);
    }
  }

  return resultString.join('');
}

function reverseCapitalization(letter) {
  if (letter.toLowerCase() === letter) {
    return letter.toUpperCase();
  } else {
    return letter.toLowerCase();
  }
}
