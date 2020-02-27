

export function dropElements(arr, func) {
  let index = 0;
  while (func(arr[index]) === false && index<arr.length) index++;
  return arr.slice(index);
}
