export const findFriend = (arr) => {
  const n = arr.length;
  let cnt = 0;

  if (n < 3) {
    return 0;
  }

  for (let i = 0; i < n - 2; i++) {
    const subarray = arr.slice(i, i + 3);
    const blueCount = subarray.filter((item) => item === 'blue').length;
    const redCount = subarray.filter((item) => item === 'red').length;

    if (redCount === 1 && blueCount === 2) {
      cnt++;
      const mid = subarray[1];
      const right = subarray[2];

      if (mid === 'red') {
        i += 1;
      } else if (right === 'red') {
        i += 2;
      }
    }
  }

  return cnt;
};
