export function unpackArray(arr) {
  let result = [];

  arr.forEach((el) => {
    if (Array.isArray(el)) {
      result = [...result, ...unpackArray(el)];
    } else {
      result.push(el);
    }
  });
  return result;
}
