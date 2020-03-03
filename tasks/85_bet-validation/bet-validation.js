/**
 * @param {Array<number>} [N, M]
 * @param {string} message
 * @return {Array<number>|string}
 * @description "This is a validator for the lottery. Checks messages:
 * contains exactly N numbers between 1 and M separated by comma or space"
 */
// eslint-disable-next-line camelcase
export function validate_bet([N, M], message) {
  const regex = /^(\d\s*,?\s*)+$/g;
  if (!regex.test(message)) {
    return 'None';
  }

  const numbers = message.match(/\d+/g) || [];
  if (numbers.length !== N) {
    return 'None';
  }

  if (numbers.every((number) => number >= 1 && number <= M)) {
    return numbers.sort((a, b) => a - b);
  } else {
    return 'None';
  }
}
