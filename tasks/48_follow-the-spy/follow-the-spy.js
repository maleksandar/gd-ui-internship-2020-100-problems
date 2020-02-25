

export function followTheSpy(routes) {
  let hashTable = {};

  routes.forEach((element) => {
    hashTable[element[0]] = element[1];
  });

  let ret = [];
  let currentDestination = routes[0][0];


  while (hashTable[currentDestination] !== undefined) {
    ret.push(currentDestination);
    currentDestination = hashTable[currentDestination];
  }

  ret.push(currentDestination);

  return ret.join(', ');
}
