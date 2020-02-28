

export function findMissing(progression) {
  for (let i=0; i<progression.length-2; i++) {
    let firstDiff = progression[i+1] - progression[i];
    let secondDiff = progression[i+2] - progression[i+1];

    if (firstDiff < secondDiff) {
      return progression[i+1] + firstDiff;
    } else if (firstDiff > secondDiff) {
      return progression[i] + secondDiff;
    }
  }
}
