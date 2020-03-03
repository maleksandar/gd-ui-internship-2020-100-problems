export function sumAll([from, to]) {
  if (to < from) {
    [from, to] = [to, from];
  }

  return (to - from + 1) * (to + from) / 2;
}
