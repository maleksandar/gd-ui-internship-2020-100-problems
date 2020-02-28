export const squares = n => {
  let seen = {};
  let squares = {};
  let counter = 0;

  for (let i = n; i > 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (typeof squares[i] !== "number") {
        squares[i] = i * i;
      }
      if (typeof squares[j] !== "number") {
        squares[j] = j * j;
      }
      let x = squares[i];
      let y = squares[j];
      let z = x - y;

      if (z >= 1 && z <= n) {
        if (seen[z] === undefined) {
          seen[z] = true;
          counter++;
        }
      }
    }
  }
  return counter;
};
