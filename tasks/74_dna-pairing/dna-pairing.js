export function pairElement(str) {
  return str.split('').map((char) => {
    switch (char) {
      case 'C':
        return ['C', 'G'];
      case 'G':
        return ['G', 'C'];
      case 'A':
        return ['A', 'T'];
      case 'T':
        return ['T', 'A'];
    }
  });
}
