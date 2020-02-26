export function whatIsInAName(arrayOfObjects, object) {
  const keys = Object.keys(object);
  return arrayOfObjects.filter((obj) => {
    return keys.every((key) => {
      return obj[key] === object[key];
    });
  });
}
