

export function unpackArray(arr) {
  let ret = [];
  for (let i=0; i<arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ret = ret.concat(unpackArray(arr[i]));
    } else {
      ret = ret.concat(arr[i]);
    }
  }
  return ret;
  // return arr.flat(Infinity);
}
