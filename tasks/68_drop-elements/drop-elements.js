export function dropElements(arr, func) {
  const cloneArr = [...arr];
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) return cloneArr;
    cloneArr.shift();
  }
  return cloneArr;
}
