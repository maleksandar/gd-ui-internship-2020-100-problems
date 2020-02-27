export const pairElement = (string) => {
  const DNA_PAIRS = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
  };

  const elements = string.split('');
  return elements.map((char) => [char, DNA_PAIRS[char]]);
};

// Alternative solution
export const pairElement2 = (string) => {
  let paired = [];

  for (let i = 0; i < string.length; i++) {
    pairDNA(paired, string[i]);
  }

  return paired;
};

const pairDNA = (paired, char) => {
  switch (char) {
    case 'A':
      paired.push(['A', 'T']);
      break;
    case 'T':
      paired.push(['T', 'A']);
      break;
    case 'C':
      paired.push(['C', 'G']);
      break;
    case 'G':
      paired.push(['G', 'C']);
      break;
  }
};
