export function sym() {
  var arrays = [].slice.call(arguments);

  function diff(arr1, arr2) {
    return arr1.filter(function(v) {
      return !~arr2.indexOf(v);
    });
  }

  return arrays.reduce(function(accArr, curArr) {
    return []
      .concat(diff(accArr, curArr), diff(curArr, accArr))
      .filter(function(v, i, self) {
        return self.indexOf(v) === i;
      })
      .sort();
  });
}
