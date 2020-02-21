export function uniqueInOrder(sequence) {
  if (typeof sequence === 'string') {
    sequence = sequence.split('');
  }

  const n = sequence.length;

  if (n === 0) return [];

  const uniqueInOrderArray = [sequence[0]];

  for (let i = 1; i < n; i++) {
    const prev = sequence[i - 1];
    const curr = sequence[i];
    prev != curr && uniqueInOrderArray.push(curr);
  }

  return uniqueInOrderArray;
}
