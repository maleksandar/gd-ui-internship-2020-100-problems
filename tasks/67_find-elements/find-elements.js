export const findElement = (arr, func) => {
  for (let i = 0; i < arr.length; i++) {
    const number = arr[i];

    if (func(number)) {
      return number;
    }
  }

  return undefined;
};

// Alternative solution using map() and indexOf()
export const findElement2 = (arr, func) => {
  const index = arr.map(func).indexOf(true);
  return index < 0 ? undefined : arr[index];
};
