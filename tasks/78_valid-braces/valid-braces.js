export function validBraces(string) {
  let openBraces = '({[';
  let arrOfOpenedBraces = [];
  let match = {
    '(': ')',
    '{': '}',
    '[': ']',
  };

  for (let i = 0; i < string.length; i++) {
    if (openBraces.indexOf(string[i]) >= 0) {
      arrOfOpenedBraces.push(string[i]);
    } else if (string[i] ===
            match[arrOfOpenedBraces[arrOfOpenedBraces.length - 1]]) {
      arrOfOpenedBraces.pop();
    }
  }

  return arrOfOpenedBraces.length === 0;
}
