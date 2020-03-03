export function uniteUnique(...arrays) {
  let joinedArr = [];
  arrays.forEach((arr) => {
    joinedArr = [...joinedArr, ...arr];
  });

  return joinedArr.filter((el, i) => i === joinedArr.indexOf(el));
}
