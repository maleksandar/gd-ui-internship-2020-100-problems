export const peopleInBus = (list) => {
  let cnt = 0;

  list.forEach((arr) => {
    cnt += arr[0];
    cnt -= arr[1];
  });

  return cnt;
};
