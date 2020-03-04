export function updateInventory(arr1, arr2) {
  let currentInvertory = hashify(arr1);
  let newInvertory = hashify(arr2);
  for (const [key, value] of newInvertory) {
    if (currentInvertory.has(key)) {
      currentInvertory.set(key, currentInvertory.get(key) + value);
    } else {
      currentInvertory.set(key, value);
    }
  }


  return arrayify(currentInvertory).sort((a, b) => {
    return a[1].charCodeAt(0) - b[1].charCodeAt(0);
  });
}

function hashify(array) {
  // eslint-disable-next-line no-undef
  let hashMap = new Map();
  array.forEach((element) => {
    hashMap.set(element[1], element[0]);
  });
  return hashMap;
}

function arrayify(hashMap) {
  let array = [];

  // eslint-disable-next-line guard-for-in
  for (const [key, value] of hashMap) {
    array.push([value, key]);
  }

  return array;
}
