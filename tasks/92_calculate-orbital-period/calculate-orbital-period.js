const GM = 398600.4418;
const EARTH_RADIUS = 6367.4447;


export function orbitalPeriod(arr) {
  const orbitalPeriods = [];
  arr.forEach((object) => {
    const orbitalPeriod = {};
    orbitalPeriod.name = object.name;
    orbitalPeriod.orbitalPeriod = getOrbitalPeriod(object.avgAlt);
    orbitalPeriods.push(orbitalPeriod);
  });
  return orbitalPeriods;
}

function getOrbitalPeriod(avgAlt) {
  const semiMajorAxis = EARTH_RADIUS + avgAlt;
  return Math.round(2 * Math.PI * Math.sqrt(Math.pow(semiMajorAxis, 3) / GM));
}
