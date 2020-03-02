const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;


export function orbitalPeriod(array) {
  let orbitalPeriods = [];
  array.forEach((element) => {
    orbitalPeriods.push( {name: element.name,
      orbitalPeriod: calculatePeriod(element.avgAlt)} );
  });

  return orbitalPeriods;
}

function calculatePeriod(avgAlt) {
  // eslint-disable-next-line max-len
  return Math.round(2 * Math.PI * Math.sqrt((Math.pow(EARTH_RADIUS + avgAlt, 3))/(GM)));
}
