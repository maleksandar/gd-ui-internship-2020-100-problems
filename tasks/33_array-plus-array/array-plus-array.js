export function arrayPlusArray(arr1, arr2) {
  arr1.length < arr2.length ? arr1.push(0) : arr2.push(0);

  const pairsOfNums = arr1.map((num, index) => {
    const num1 = num;
    const num2 = arr2[index];
    return [num1, num2];
  });

  const sumsOfPairs = pairsOfNums.reduce((sums, [num1, num2]) => {
    sums.push(num1 + num2);
    return sums;
  }, []);

  return sumsOfPairs;
}
