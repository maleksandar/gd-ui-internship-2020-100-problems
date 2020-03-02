export const squares = (n) => {
  let seen = {};
  let result = 0;

  for (let i = n; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      const firstNumber = i * i;
      const secondNumber = j * j;
      const squareDiff = firstNumber - secondNumber;

      if (squareDiff >= 1 && squareDiff <= n) {
        if (seen[squareDiff] === undefined) {
          seen[squareDiff] = true;
          result++;
        }
      }
    }
  }

  return result;
};
