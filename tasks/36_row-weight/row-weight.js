export function rowWeights(weights) {
  const team1Weights = weights.filter((weight, index) => {
    return !(index % 2);
  });
  const team2Weights = weights.filter((weight, index) => {
    return (index % 2);
  });

  const sumOfTeam1Weights = team1Weights.reduce((a, b) => a + b, 0);
  const sumOfTeam2Weights = team2Weights.reduce((a, b) => a + b, 0);

  return [sumOfTeam1Weights, sumOfTeam2Weights];
}
