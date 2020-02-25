export function whatIsInAName(objArr, compareObj) {
  const compareObjKeys = Object.keys(compareObj);
  return objArr.filter((obj) => {
    for (let prop of compareObjKeys) {
      if (obj[prop] !== compareObj[prop]) {
        return false;
      }
    }
    return true;
  });
}
