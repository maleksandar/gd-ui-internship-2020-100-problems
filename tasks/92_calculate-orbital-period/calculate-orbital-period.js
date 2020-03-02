export const orbitalPeriod = (arr) => {
  const GM = 398600.4418;
  const EARTH_RADIUS = 6367.4447;
  return arr.map(({name, avgAlt}) => {
    const ORBIT_AXIS = EARTH_RADIUS + avgAlt;
    const ORBITAL_PERIOD = Math.round(getOrbitalPeriod(ORBIT_AXIS, GM));
    return {name, orbitalPeriod: ORBITAL_PERIOD};
  });
};

const getOrbitalPeriod = (ORBIT_AXIS, GM) => {
  return 2 * Math.PI * Math.sqrt(Math.pow(ORBIT_AXIS, 3) / GM);
};
