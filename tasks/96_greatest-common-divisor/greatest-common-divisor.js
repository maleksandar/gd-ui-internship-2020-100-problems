export const greatestCommonDivisor = (a, b) => {
  if (typeof a !== "number" || typeof b !== "number") return false;

  a = Math.abs(a);
  b = Math.abs(b);

  while (b) {
    var temp = b;
    b = a % b;
    a = temp;
  }
  return a;
};
