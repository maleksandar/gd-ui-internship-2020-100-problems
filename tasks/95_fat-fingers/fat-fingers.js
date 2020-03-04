export function fatFingers(inputString) {
  let transformedString = [];
  let caps = false;

  for (let i=0; i<inputString.length; i++) {
    if (isLetterA(inputString[i])) {
      caps = !caps;
    } else {
      if (caps) {
        if (isUpperCase(inputString[i])) {
          transformedString.push(inputString[i].toLowerCase());
        } else {
          transformedString.push(inputString[i].toUpperCase());
        }
      } else {
        transformedString.push(inputString[i]);
      }
    }
  }
  return transformedString.join('');
}

function isLetterA(char) {
  return char === 'a' || char === 'A';
}

function isUpperCase(char) {
  return char === char.toUpperCase();
}
