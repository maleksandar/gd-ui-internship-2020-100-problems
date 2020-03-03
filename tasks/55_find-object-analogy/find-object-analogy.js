export function whatIsInAName(arrayOfObjects, object) {
  return arrayOfObjects.filter(isSuperSetOf(object));
}
function isSuperSetOf(object) {
  const keys = Object.keys(object);
  return (obj) => {
    return keys.every((key) => {
      return obj[key] === object[key];
    });
  };
}

