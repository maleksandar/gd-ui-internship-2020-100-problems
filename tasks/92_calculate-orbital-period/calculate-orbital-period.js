export function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;

  return arr.map((value) => {
    let earth = EARTH_RADIUS + value.avgAlt;
    let orbitalPeriod = Math.round(2 * Math.PI
            * Math.sqrt(Math.pow(earth, 3) / GM));

    return {name: value.name, orbitalPeriod: orbitalPeriod};
  });
}
