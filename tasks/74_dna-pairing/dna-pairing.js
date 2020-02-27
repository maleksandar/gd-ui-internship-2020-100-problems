

const pairs = {
  G: 'C',
  C: 'G',
  A: 'T',
  T: 'A',
};

export function pairElement(nucleoBasesList) {
  let pairedBases = [];

  for (let i=0; i<nucleoBasesList.length; i++) {
    pairedBases.push( [nucleoBasesList[i], pairs[nucleoBasesList[i]]]);
  }

  return pairedBases;
}
