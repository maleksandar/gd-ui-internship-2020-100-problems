export function dropElements(array, func) {
  let result = [];

  result = (array.filter((value) => {
    return func(value);
  }));

  return result;
}
