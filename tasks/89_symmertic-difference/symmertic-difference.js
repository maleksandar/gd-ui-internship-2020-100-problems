export function sym(...arrays) {
  const finalSymetricDiff = arrays.reduce((acc, curr) => {
    const leftSymmetricDiff = acc.filter((el) => curr.indexOf(el) === -1);
    const rightSymmetricDiff = curr.filter((el) => acc.indexOf(el) === -1);
    const symetricDiff = [...leftSymmetricDiff, ...rightSymmetricDiff];
    return symetricDiff.filter((el, i) => i === symetricDiff.indexOf(el));
  });
  finalSymetricDiff.sort((a, b) => a - b);
  return finalSymetricDiff;
}
