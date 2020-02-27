export function pairElement(str) {
  const dnaPairs = {
    'G': 'C',
    'C': 'G',
    'A': 'T',
    'T': 'A',
  };
  const pairsArr = [];
  str.split('').forEach((char) => {
    const pair = [char, dnaPairs[char]];
    pairsArr.push(pair);
  });
  return pairsArr;
}
