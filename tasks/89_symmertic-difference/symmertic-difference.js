/**
 * @param  {...Array<number>} arrays
 * @return {Array<number>}
 * @description "Calculates the symmetric difference of the provided arrays."
 */

export function sym(...arrays) {
  let symetricDifference = arrays[0];

  for (let i = 1; i < arrays.length; i++) {
    symetricDifference = getSymetricDifference(symetricDifference, arrays[i]);
  }

  return removeDuplicates(symetricDifference).sort((a, b) => a - b);
}

function getSymetricDifference(A, B) {
  const AdiffB = diff(A, B);
  const BdiffA = diff(B, A);

  return AdiffB.concat(BdiffA);
}

function diff(A, B) {
  return A.filter((element) => {
    return B.indexOf(element) === -1;
  });
}

function removeDuplicates(array) {
  return array.filter((element, index) => array.indexOf(element) === index);
}
