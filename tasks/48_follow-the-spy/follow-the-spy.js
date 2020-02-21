export const followTheSpy = (routes) => {
  let arr = deepCopy(routes);
  let filtered = arr.splice(0, 1);
  let set = new CustomSet();
  set.add(...filtered);

  for (let i = 0; arr.length > 0; i++) {
    const index = arr.findIndex((item) => item[0] === filtered[i][1]);
    const found = arr[index];
    filtered.push(found);
    set.add(found);
    arr.splice(index, 1);
  }

  return [...set.get()].join(', ');
};

const deepCopy = (object) => {
  if (typeof object !== 'object' || object === null) {
    return object;
  }

  let newObject = Array.isArray(object) ? [] : {};
  const keys = Object.keys(object);

  for (let key of keys) {
    const value = object[key];
    const isObject = (typeof value === 'object' && value !== null);
    newObject[key] = isObject ? deepCopy(value) : value;
  }

  return newObject;
};

class CustomSet {
  constructor() {
    this._values = {};
    this._size = 0;
  }

  add(values) {
    for (let value of values) {
      if (!this.contains(value)) {
        this._values[value] = value;
        this._size++;
      }
    }
  }

  contains(value) {
    return typeof this._values[value] !== 'undefined';
  }

  get() {
    return Object.keys(this._values);
  }
}

// Alternative solution
export const followTheSpy2 = (routes) => {
  const result = [];

  routes.map((currRoute) => {
    if (!routes.find((route) => route[1] === currRoute[0])) {
      result.push(...currRoute);
    }
  }).map(() => {
    routes.map((currRoute) => {
      currRoute[0] === result[result.length - 1] && result.push(currRoute[1]);
    });
  });

  return result.join(', ');
};
