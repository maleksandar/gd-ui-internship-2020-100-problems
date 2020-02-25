export function sortByBits(arr) {
  return [...arr]
      .sort((a, b) => {
        const result = getNumOfOneBits(a) - getNumOfOneBits(b);
        return result === 0? a - b : result;
      });
}

function getNumOfOneBits(num) {
  return [...num.toString(2)] // Convert num to a binary array
      .reduce((sum, curr) => curr === '1'? ++sum : sum, 0);
}
