export function peopleInBus(array) {
  let total = [];

  for (let i = 0; i < array.length; i++) {
    array[i].reduce((a, b) => {
      return total.push(a - b);
    });
  }

  return total.reduce((a, b) => {
    return a + b;
  });
}
