export function sortByBits(arr) {
  return [...arr]
      .sort((a, b) => {
        const result = numOfOnebits(a) - numOfOnebits(b);
        return result === 0? a - b : result;
      });
}

function numOfOnebits(num) {
  return [...num.toString(2)] // Convert num to a binary array
      .reduce((sum, curr) => curr === '1'? ++sum : sum, 0);
}
