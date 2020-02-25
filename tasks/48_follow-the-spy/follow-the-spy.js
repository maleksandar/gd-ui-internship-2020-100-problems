export function followTheSpy(arrayOfRoutes) {
  let mapOfRoutes = Object.create(null);
  const start = arrayOfRoutes[0][0];
  let path = [start];

  arrayOfRoutes.forEach(([from, to]) => {
    mapOfRoutes[from] = to;
  });

  while (mapOfRoutes[getLastElement(path)]) {
    path.push(mapOfRoutes[getLastElement(path)]);
  }

  return path.join(', ');
}

function getLastElement(array) {
  return array.slice(-1).pop();
}
