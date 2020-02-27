

export function deepClone(obj) {
  let ret = {};

  for (const property in obj) {
    if (obj === Object(obj)) {
      ret[property] = deepClone(obj[property]);
    } else ret[property] = obj[property];
  }
  return ret;
}
