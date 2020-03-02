export function DNAStrand(str) {
  let result = '';

  result += str.split('').map((char) => {
    switch (char) {
      case 'C':
        return 'G';
      case 'G':
        return 'C';
      case 'A':
        return 'T';
      case 'T':
        return 'A';
    }
  });

  return result.split(',').join('');
}
