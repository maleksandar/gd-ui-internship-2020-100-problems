export const followTheSpy = routes => {
  const trace = [];

  routes
    .map(currentPair => {
      if (!routes.find(point => point[1] === currentPair[0])) {
        trace.push(currentPair[0]);
        trace.push(currentPair[1]);
      }
    })
    .map(() => {
      routes.map(currentPair => {
        currentPair[0] === trace[trace.length - 1] &&
          trace.push(currentPair[1]);
      });
    });

  return trace.join(", ");
};
