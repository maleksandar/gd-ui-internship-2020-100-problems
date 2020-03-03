export function sumAll(arr) {
  const sortedArr = arr[0] < arr[1]? arr : [...arr].reverse();
  let sumOfAll = 0;

  for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
    sumOfAll += i;
  }

  return sumOfAll;
}
