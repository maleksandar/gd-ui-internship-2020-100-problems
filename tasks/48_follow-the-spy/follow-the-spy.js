export function followTheSpy(routes) {
  let result = [];

  routes.map((route) => {
    if (result.length === 0) {
      result.push(route[0]);
    }

    routes.map((route) => {
      if (route[0] === result[result.length - 1]) {
        result.push(route[1]);
      }
    });
  });

  return result.join(', ');
}
