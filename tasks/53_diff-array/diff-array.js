export function diffArray(A, B) {
  const AdiffB = diff(A, B);
  const BdiffA = diff(B, A);

  return AdiffB.concat(BdiffA);
}

function diff(A, B) {
  return A.filter((element) => {
    return B.indexOf(element) === -1;
  });
}
