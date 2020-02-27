

export function expressionMatter(a, b, c) {
  let maxValue = Number.MIN_SAFE_INTEGER;
  if ((a+b+c) > maxValue) maxValue = a+b+c;
  if ((a+b*c) > maxValue) maxValue = a+b*c;
  if ((a*b+c) > maxValue) maxValue = a*b+c;
  if ((a*b*c) > maxValue) maxValue = a*b*c;
  if (((a+b)*c) > maxValue) maxValue = (a+b)*c;
  if ((a*(b+c)) > maxValue) maxValue = a*(b+c);
  return maxValue;
}
