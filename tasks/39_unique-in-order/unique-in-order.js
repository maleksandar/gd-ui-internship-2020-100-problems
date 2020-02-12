export function uniqueInOrder(sequence) {
  if (typeof sequence === 'string') {
    sequence = sequence.split('');
  }

  if (sequence.length === 0) return [];

  return sequence.reduce((acc, item) => {
    let lastInAcc = acc.slice(-1)[0];
    if (lastInAcc !== item) {
      acc.push(item);
    }
    return acc;
  }, [sequence[0]]);
}
