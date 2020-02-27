export function expressionMatter(a, b, c) {
  const combinations = [
    a + b + c,
    a * b * c,
    a * (b + c),
    (a + b) * c,
    a + (b * c),
    (a * b) + c,
  ];
  return Math.max(...combinations);
}
