const contacts = [
  {
    firstName: 'Kristian',
    lastName: 'Vos',
  },
  {
    firstName: 'Sherlock',
    likes: ['Intriguing Cases', 'Violin'],
  },
  {
    firstName: 'Harry',
    likes: [],
  },
  {
    firstName: 'Akira',
  },
];

export function lookupProfile(firstName, property) {
  let result = contacts.find((contact) => {
    return contact.firstName === firstName;
  });

  if (result) {
    if (result[property]) {
      return result[property];
    } else {
      return 'No such property';
    }
  } else {
    return 'No such contact';
  }
}
