export const rowWeights = (arr) => {
  const n = arr.length;
  let team1 = 0;
  let team2 = 0;

  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      team1 += arr[i];
    } else {
      team2 += arr[i];
    }
  }

  return [team1, team2];
};
