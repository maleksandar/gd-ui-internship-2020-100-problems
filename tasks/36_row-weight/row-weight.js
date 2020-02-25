export function rowWeights(arr) {
  let firstTeam = [];
  let secondTeam = [];
  let niz = [];

  for (let i = 0; i < arr.length; i += 2) {
    firstTeam.push(arr[i]);

    if (!isNaN(arr[i + 1])) {
      secondTeam.push(arr[i + 1]);
    }
  }

  niz.push(sum(firstTeam));
  niz.push(sum(secondTeam));

  return niz;
}

function sum(arr) {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
}
