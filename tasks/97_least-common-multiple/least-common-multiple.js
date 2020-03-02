export function leastCommonMultiple(num1, num2) {
  return (num1 * num2) / getGcd(num1, num2);
}
function getGcd(num1, num2) {
  if (num2 === 0) {
    return num1;
  }
  return getGcd(num2, num1 % num2);
}
