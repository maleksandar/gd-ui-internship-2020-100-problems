

export function findEqualIndex(array) {
  let leftSum = 0;
  let rightSum = array.reduce( (acc, val) => acc + val, 0 );

  for (let i=0; i<array.length; i++) {
    rightSum -= array[i];
    if (leftSum === rightSum) return i;
    leftSum += array[i];
  }


  return -1;
}
