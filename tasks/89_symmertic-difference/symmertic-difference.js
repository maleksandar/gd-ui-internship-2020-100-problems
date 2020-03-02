/* eslint-disable prefer-rest-params */
export function sym(args) {
  let arrayOfArgs = [].slice.call(arguments);

  let result = arrayOfArgs.reduce((acc, curr) => {
    let newArr = [];
    acc.forEach((value) => {
      if (curr.indexOf(value) === -1) {
        newArr.push(value);
      }
    });

    curr.forEach((value) => {
      if (acc.indexOf(value) === -1) {
        newArr.push(value);
      }
    });

    return newArr;
  });

  let arrSymmetricDiff = result.reduce((acc, curr) => {
    if (acc.indexOf(curr) === -1) {
      acc.push(curr);
    }

    return acc;
  }, []);

  return arrSymmetricDiff.sort();
}


