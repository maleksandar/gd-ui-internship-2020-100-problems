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

export function updateRecords(id, property, value) {
  const entry = collection[id];

  if (entry !== undefined) {
    if (value === '') {
      delete entry[property];
    } else {
      if (property === 'tracks') {
        if (entry[property] === undefined) {
          entry[property] = [];
        }
        entry[property].push(value);
      } else {
        entry[property] = value;
      }
    }
  }

  return collection;
}
