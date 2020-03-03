/**
 * @param {Array<Object>} arrayOfElements
 * @return {Array<Object>}
 * @description "Returns a new array that transforms
 * the element's average altitude into their orbital periods."
 */
export function orbitalPeriod(arrayOfElements) {
  return arrayOfElements.map((element) => {
    return {
      name: element.name,
      orbitalPeriod: getOrbitalPeriod(element.avgAlt),
    };
  });
}

function getOrbitalPeriod(avgAlt) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;

  return Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(avgAlt + EARTH_RADIUS, 3) / GM)
  );
}
