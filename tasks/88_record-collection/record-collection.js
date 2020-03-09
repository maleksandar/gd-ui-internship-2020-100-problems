let collection = {
  '2548': {
    'album': 'Slippery When Wet',
    'artist': 'Bon Jovi',
    'tracks': [
      'Let It Rock',
      'You Give Love a Bad Name',
    ],
  },
  '2468': {
    'album': '1999',
    'artist': 'Prince',
    'tracks': [
      '1999',
      'Little Red Corvette',
    ],
  },
  '1245': {
    'artist': 'Robert Palmer',
    'tracks': [],
  },
  '5439': {
    'album': 'ABBA Gold',
  },
};
// Keep a copy of the collection for tests
let collectionCopy = JSON.parse(JSON.stringify(collection));
// Only change code below this line
export function updateRecords(id, prop, value) {
  id = id.toString();
  if (value === '') {
    delete collectionCopy[id][prop];
  } else if (prop === 'tracks') {
    if (collectionCopy[id].hasOwnProperty(prop)) {
      collectionCopy[id][prop].push(value);
    } else {
      collectionCopy[id][prop] = [value];
    }
  } else {
    collectionCopy[id][prop] = value;
  }

  return collectionCopy;
}
