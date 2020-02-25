const array = [
  {
    firstname: 'Kristian',
    lastName: 'Vos',
  },

  {
    firstname: 'Sherlock',
    likes: ['Intriguing Cases', 'Violin'],
  },

  {
    firstname: 'Akira',
  },

  {
    firstname: 'Harry',
    likes: ['Intriguing Cases', 'Violin'],
  },
];

export function lookupProfile(firstname, prop) {
  let filtered = array.filter((contact) => (contact.firstname === firstname));

  if (filtered.length === 0) {
    return 'No such contact';
  }

  return (filtered[0])[prop] || 'No such property';
}


