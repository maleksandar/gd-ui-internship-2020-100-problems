

export function uniteUnique(...arrays) {
  let values = {};
  let ret = [];

  for (let i=0; i<arrays.length; i++) {
    arrays[i].forEach((element) => {
      if (values.hasOwnProperty(element) === false ) {
        values[element] = true;
        ret.push(element);
      }
    });
  }

  return ret;
}
