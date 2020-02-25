export const whatIsInAName = (collection, source) => {
  let result = [];
  const sourceKeys = Object.keys(source);

  for (const object of collection) {
    const isValid = sourceKeys.every((key) => containsKey(object, key, source));

    if (isValid) {
      result.push(object);
    }
  }

  return result;
};

// Alternative solution using filter()
export const whatIsInAName2 = (collection, source) => {
  const sourceKeys = Object.keys(source);

  return collection.filter((object) => {
    for (const key of sourceKeys) {
      if (!containsKey(object, key, source)) {
        return false;
      }
    }

    return true;
  });
};

const containsKey = (object, key, source) => {
  return object.hasOwnProperty(key) && object[key] === source[key];
};
