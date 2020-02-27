export function deepClone(obj) {
  const cloneObj = {};
  if (isObject(obj)) {
    Object.keys(obj)
        .forEach((prop) => {
          cloneObj[prop] = deepClone(obj[prop]);
        });
  } else {
    return obj;
  }

  return cloneObj;
}

function isObject(obj) {
  return obj === Object(obj);
}
