export const sortByBits = (arr) => {
  arr.sort((a, b) => {
    const firstBitsCount = countBits(a);
    const secondBitsCount = countBits(b);

    if (firstBitsCount < secondBitsCount) {
      return -1;
    } else if (firstBitsCount > secondBitsCount) {
      return 1;
    }

    return a - b;
  });

  return arr;
};

const countBits = (number) => {
  const bits = Number(number).toString(2);
  const oneCount = bits.match(/1/g);
  return oneCount ? oneCount.length : 0;
};
