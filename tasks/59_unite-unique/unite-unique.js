export function uniteUnique(...arrays) {
  const uniqueArray = [];

  arrays.forEach((array) => {
    const numbersToPush = array.reduce((acc, number) => {
      if (elementNotInArray(uniqueArray, number)) {
        acc.push(number);
      }
      return acc;
    }, []);

    uniqueArray.push(...numbersToPush);
  });

  return uniqueArray;
}

function elementNotInArray(array, element) {
  return array.indexOf(element) === -1;
}

