export function maxTripletSum(arr) {
  let niz = [];

  niz = arr.filter((a, b) => arr.indexOf(a) === b);
  niz.sort((a, b) => b - a);

  return niz[0] + niz[1] + niz[2];
}
