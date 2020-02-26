export function sumAll([from, to]) {
  to < from && ([from, to] = [to, from]);

  let sum = from;

  while (from < to) {
    from += 1;
    sum += from;
  }

  return sum;
}
