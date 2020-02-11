export function getIndexToInsert(arr, num) {
  arr.sort((a, b)=> a-b);
  for (let i = 0; i<arr.length-1; i++) {
    if (num > arr[i] && num <=arr[i+1]) {
      return i+1;
    } else if (num <= arr[0]) return 0;
    else if (num >arr[arr.length -1]) return arr.length;
  }
}
