/**
 * @param {string} DNA
 * @return {string}
 * @description "Returns the complementary side of the DNA."
 */


export function DNAStrand(DNA) {
  const basePairs = {
    G: 'C',
    C: 'G',
    A: 'T',
    T: 'A',
  };

  const complementaryDNA = [];

  DNA.split('').forEach((character) => {
    complementaryDNA.push(basePairs[character]);
  });

  return complementaryDNA.join('');
}
