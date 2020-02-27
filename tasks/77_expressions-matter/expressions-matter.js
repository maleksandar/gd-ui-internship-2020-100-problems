export function expressionMatter(num1, num2, num3) {
  return Math.max(
      num1 + num2 + num3,
      num1 * num2 * num3,
      num1 + num2 * num3,
      num1 * (num2 + num3),
      num1 * num2 + num3,
      (num1 + num2) * num3
  );
}
