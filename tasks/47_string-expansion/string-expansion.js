export function stringExpansion(string) {
  const len = string.length;
  let expansion = [];
  let number = 1;

  for (let i = 0; i < len; i++) {
    let currentChar = string[i];
    if (isFinite(currentChar)) {
      number = parseInt(currentChar);
    } else {
      expansion.push(currentChar.repeat(number));
    }
  }

  return expansion.join('');
}
