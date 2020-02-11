export const arrayLeaders = arr => {
  var size = arr.length;
  let leaders = [];
  let sum = 0;
  for (let i = size - 1; i >= 0; i--) {
    let num = arr[i];
    if (num > sum) {
      leaders.push(num);
    }
    sum += num;
  }
  return leaders.reverse();
};
