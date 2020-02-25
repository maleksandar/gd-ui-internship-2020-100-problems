export function arrayLeaders(arr) {
  let niz = [];
  let zbir = 0;

  if (arr[arr.length - 1] > 0) {
    niz.push(arr[arr.length - 1]);
  }

  for (let i = arr.length - 2; i >= 0; i--) {
    zbir += arr[i + 1];

    if (arr[i] > zbir) {
      niz.push(arr[i]);
    }
  }

  return niz.reverse();
}
