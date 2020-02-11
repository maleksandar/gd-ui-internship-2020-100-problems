export const uniqueInOrder = (arr) => {
  return (Array.isArray(arr) ? arr : arr.split(''))
      .filter((element, index) => element !== arr[index + 1]);
};
