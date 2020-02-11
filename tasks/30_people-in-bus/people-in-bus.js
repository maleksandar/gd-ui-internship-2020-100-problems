export const peopleInBus = busStops => {
  var peopleOnBus = 0;
  for (var i = 0; i < busStops.length; i++) {
    peopleOnBus += busStops[i][0];
    peopleOnBus -= busStops[i][1];
  }
  return peopleOnBus;
};
