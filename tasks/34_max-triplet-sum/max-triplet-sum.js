export function maxTripletSum(arr) {
  let uniqVal = arr.filter((el, i) => arr.indexOf(el) === i);
  uniqVal.sort((a, b) => a - b);
  return uniqVal[uniqVal.length - 1] +
        uniqVal[uniqVal.length - 2] +
        uniqVal[uniqVal.length - 3];
}
