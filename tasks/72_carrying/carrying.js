export function addTogether(first, second) {
  if (typeof first !== 'number') {
    return;
  }
  if (arguments.length < 2) {
    return function(second) {
      if (typeof second !== 'number') {
        return;
      }
      return first + second;
    };
  } else if (typeof second !== 'number') {
    return;
  }
  return first + second;
}
