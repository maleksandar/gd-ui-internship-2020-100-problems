export function followTheSpy(travels) {
  let travelsDict = {};
  let currDest = travels[0][0];
  let result = [currDest];

  travels.forEach((itinerary) => {
    travelsDict[itinerary[0]] = itinerary[1];
  });

  while (travelsDict.hasOwnProperty(currDest)) {
    currDest = travelsDict[currDest];
    result.push(currDest);
  }

  return result.join(', ');
}
