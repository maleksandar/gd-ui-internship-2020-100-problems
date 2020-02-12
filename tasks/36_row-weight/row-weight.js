export function rowWeights(weights) {
  return weights.reduce(([team1, team2], item, index) => {
            index % 2 ? team2 += item : team1 += item;
            return [team1, team2];
  }, [0, 0]);
}
