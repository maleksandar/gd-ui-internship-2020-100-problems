export function followTheSpy(travels) {
  let travelsDict = getTravelsDict(travels);
  let currDest = travels[0][0];
  let result = [currDest];

  while (travelsDict.hasOwnProperty(currDest)) {
    currDest = travelsDict[currDest];
    result.push(currDest);
  }

  return result.join(', ');
}

function getTravelsDict(travels) {
  const travelsDict = {};

  travels.forEach((itinerary) => {
    travelsDict[itinerary[0]] = itinerary[1];
  });

  return travelsDict;
}
