export function sym(...args) {
  let sets = [];

  args.forEach((array) => {
    sets.push(createSet(array));
  });


  let currentDifference = diff(sets[0], sets[1]).concat(diff(sets[1], sets[0]));

  for (let i=2; i<sets.length; i++) {
    let currentDifferenceSet = createSet(currentDifference);
    currentDifference = diff(currentDifferenceSet, sets[i])
        .concat(diff(sets[i], currentDifferenceSet));
  }

  return currentDifference.sort();
}


function createSet(array) {
  let set = Object.create(null);
  array.forEach((element) => {
    set[element] = true;
  });
  return set;
}

function diff(a, b) {
  let difference = [];
  for (const key in a) {
    if (b[key] === undefined) {
      difference.push(Number.parseInt(key));
    }
  }
  return difference;
}
