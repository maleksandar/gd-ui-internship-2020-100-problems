export function pairwise(arr, arg) {
  let sumOfIndices = 0;
  const usedElements = [];
  for (let i = 0; i < arr.length; i++) {
    if (!usedElements.includes(i)) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === arg && !usedElements.includes(j)) {
          sumOfIndices += i + j;
          usedElements.push(i);
          usedElements.push(j);
          break;
        }
      }
    }
  }
  return sumOfIndices;
}
