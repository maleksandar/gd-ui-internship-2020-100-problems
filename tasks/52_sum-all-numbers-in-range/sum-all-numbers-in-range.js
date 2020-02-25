

export function sumAll(range) {
  const bigger = range[0] > range[1] ? range[0] : range[1];
  const smaller = range[0] < range[1] ? range[0] : range[1];
  return (bigger*(bigger+1))/2 - (smaller*(smaller-1))/2;
}
