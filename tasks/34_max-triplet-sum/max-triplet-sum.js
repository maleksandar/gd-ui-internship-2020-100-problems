export const maxTripletSum = (arr) => {
  let unique = {};

  arr.forEach((item) => {
    if (!unique[item]) {
      unique[item] = true;
    }
  });

  let set = Object.keys(unique).map(Number);
  set.sort((a, b) => b - a);
  return set[0] + set[1] + set[2];
};
