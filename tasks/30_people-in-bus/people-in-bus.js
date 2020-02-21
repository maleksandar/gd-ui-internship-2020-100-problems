export function peopleInBus(bus) {
  return bus.reduce((inBus, station) => {
    inBus += station[0];
    inBus -= station[1];
    return inBus;
  }, 0);
}
