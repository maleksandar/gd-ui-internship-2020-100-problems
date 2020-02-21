export const firstNSmallest = (arr, number) => {
  let copy = [...arr];
  let res = [];
  copy.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    const isFound = binarySearch(copy, 0, number, arr[i]) > -1;

    if (isFound && res.length < number) {
      res.push(arr[i]);
    }
  }

  return res;
};

const binarySearch = (arr, start, end, number) => {
  while (start < end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (arr[mid] === number) {
      return mid;
    } else if (arr[mid] > number) {
      end = mid;
    } else {
      start = mid + 1;
    }
  }

  return -1;
};
