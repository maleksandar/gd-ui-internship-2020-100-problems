export const sumAll = arr => {
  let numArr = [];
  let num1 = arr[0];
  let num2 = arr[1];
  if (num1 > num2) {
    for (let i = num1; i >= num2; i--) {
      numArr.push(i);
    }
  } else if (num1 < num2) {
    for (let i = num1; i <= num2; i++) {
      numArr.push(i);
    }
  }
  return numArr.reduce((a, b) => a + b, 0);
};
