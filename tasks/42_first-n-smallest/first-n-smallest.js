

export function firstNSmallest(array, n) {
  if (n === 0) return [];
  if (n >= array.length ) return array;
  let values = [];
  let positions = [];

  let maxElem = Number.MIN_SAFE_INTEGER;


  array.forEach((element, index) => {
    if (values.length < n) { // if the values array does not have n elements yet
      values.push(element);
      positions.push(index);
      if (element > maxElem) {
        maxElem = element;
      }
    } else if (element < maxElem) { // if we have to replace an element
      let currentMaxElem = maxElem;
      maxElem = Number.MIN_SAFE_INTEGER;
      let foundPlace = false;
      for (let i=0; i<n; i++) {
        if (values[i] === currentMaxElem && !foundPlace) {
          values[i] = element;
          positions[i] = index;
          foundPlace = true;
        }
        if (values[i] > maxElem) maxElem = values[i];
      }
    }
  });

  positions.sort();
  positions.forEach( (element, index) => {
    values[index] = array[element];
  });

  return values;
}
