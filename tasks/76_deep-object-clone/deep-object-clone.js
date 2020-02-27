export const deepClone = oldObj => {
  if (oldObj === null || typeof oldObj !== "object") {
    return oldObj;
  }

  let tempObj = oldObj.constructor();
  for (let key in oldObj) {
    tempObj[key] = deepClone(oldObj[key]);
  }
  return tempObj;
};
