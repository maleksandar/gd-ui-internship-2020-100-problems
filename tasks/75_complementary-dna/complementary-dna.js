
const pairs = {
  G: 'C',
  C: 'G',
  A: 'T',
  T: 'A',
};

export function DNAStrand(dna) {
  let pairedBases = [];

  for (let i=0; i<dna.length; i++) {
    pairedBases.push(pairs[dna[i]]);
  }

  return pairedBases.join('');
}
