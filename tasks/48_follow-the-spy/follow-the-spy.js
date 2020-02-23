export const followTheSpy = routes => {
  let trace = [];

  routes.map(route => {
    if (trace.length === 0) {
      trace.push(route[0]);
    }
    routes.map(route => {
      if (route[0] === trace[trace.length - 1]) {
        trace.push(route[1]);
      }
    });
  });

  return trace.join(", ");
};
