export function pairwise(arr, arg) {
  // eslint-disable-next-line no-new-object
  if (arr.length === 0) return 0;
  let hashMap = new Object(null);
  let sum = 0;

  arr.forEach((element, index) => {
    if (hashMap[arg - element] && hashMap[arg-element].length > 0) {
      const pairIndex = hashMap[arg-element].shift();
      sum = sum + index + pairIndex;
    } else {
      if (hashMap[element]) {
        hashMap[element].push(index);
      } else {
        hashMap[element] = [index];
      }
    }
  });

  return sum;
}
