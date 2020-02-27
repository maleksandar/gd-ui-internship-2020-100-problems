export const DNAStrand = (dna) => {
  const DNA_PAIRS = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  let result = '';

  for (let i = 0; i < dna.length; i++) {
    result += DNA_PAIRS[dna[i]];
  }

  return result;
};

// Alternative solution using map()
export const DNAStrand2 = (dna) => {
  const DNA_PAIRS = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  const elements = dna.split('');
  return elements.map((char) => DNA_PAIRS[char]).join('');
};
