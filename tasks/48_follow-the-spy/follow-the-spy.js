export function followTheSpy(arrayOfRoutes) {
  let mapOfRoutes = {};
  const start = arrayOfRoutes[0][0];
  let path = [start];

  arrayOfRoutes.forEach(([from, to]) => {
    mapOfRoutes[from] = to;
  });

  while (mapOfRoutes[lastElement(path)]) {
    path.push(mapOfRoutes[lastElement(path)]);
  }

  return path.join(', ');

  function lastElement(array) {
    return array.slice(-1).pop();
  }
}
