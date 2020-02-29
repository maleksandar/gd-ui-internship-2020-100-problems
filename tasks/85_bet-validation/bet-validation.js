// eslint-disable-next-line camelcase
export function validate_bet(type, input) {
  let [n, m] = type;
  const inputArr = input.split(/[,\s]*/g);
  if (isInputValid(inputArr, m) && inputArr.length === n) {
    return inputArr.sort((a, b) => a - b);
  }
  return 'None';
}

function isInputValid(input, m) {
  return input.every((num, i) => {
    return !isNaN(num) && (num > 0 && num <= m) && input.indexOf(num) === i;
  });
}
