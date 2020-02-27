export function DNAStrand(str) {
  const dnaPairs = {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'T': 'A',
  };
  let complementaryDna = '';
  str.split('').forEach((char) => {
    complementaryDna += dnaPairs[char];
  });
  return complementaryDna;
}
