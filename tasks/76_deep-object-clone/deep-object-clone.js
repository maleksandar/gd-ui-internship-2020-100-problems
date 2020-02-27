export const deepClone = (object) => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  let newObject = Array.isArray(object) ? [] : {};
  const keys = Object.keys(object);

  for (let key of keys) {
    const value = object[key];
    const isObject = (typeof value === 'object' && value !== null);
    newObject[key] = isObject ? deepClone(value) : value;
  }

  return newObject;
};
