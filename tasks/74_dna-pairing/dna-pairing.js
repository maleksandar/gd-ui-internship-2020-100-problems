/**
 * @param {string} DNA
 * @returns {Array<Array<string>>}
 * @description "Takes each character of DNA, gets its pair,
 * and returns the results as a 2d array."
 */

export function pairElement(DNA) {
  const basePairs = {
    G: 'C',
    C: 'G',
    A: 'T',
    T: 'A',
  };

  return DNA.split('').map((character) => [character, basePairs[character]]);
}
