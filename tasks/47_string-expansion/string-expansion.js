export function stringExpansion(string) {
  let expansion = [];
  let number = 1;

  for (let i = 0; i < string.length; i++) {
    let currentChar = string[i];
    if (isFinite(currentChar)) {
      number = parseInt(currentChar);
    } else {
      expansion.push(currentChar.repeat(number));
    }
  }

  return expansion.join('');
}
