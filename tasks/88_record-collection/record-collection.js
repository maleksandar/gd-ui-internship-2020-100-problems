/**
 * @prop {number} albumID
 * @prop {string} prop
 * @prop {string} value
 * @return {Array<Object>}
 * @description "The function takes the album's id, property prop,
 * and value and modifies the data in musical album collection."
 */
const collection = {
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

export function updateRecords(albumID, prop, value) {
  const album = collection[albumID];

  if (album) {
    if (value === '') {
      delete album[prop];
    } else {
      if (prop === 'tracks') {
        if (album[prop]) {
          album[prop].push(value);
        } else {
          album[prop] = [value];
        }
      } else {
        album[prop] = value;
      }
    }
  }

  return collection;
}
