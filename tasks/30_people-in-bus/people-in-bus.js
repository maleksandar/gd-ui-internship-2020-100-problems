export const peopleInBus = busStops => {
  var peopleOnBus = 0;
  for (var i = 0; i < busStops.length; i++) {
    peopleOnBus += busStops[i][0];
    peopleOnBus -= busStops[i][1];
    if (peopleOnBus < 0) {
      console.log(
        "This situation is not possible to happen,please check function arguments again!"
      );
    }
  }
  return peopleOnBus;
};
