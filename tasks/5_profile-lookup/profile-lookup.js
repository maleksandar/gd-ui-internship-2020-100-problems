

export function lookupProfile(firstName, prop) {
  const people = [{
    firstName: 'Kristian',
    lastName: 'Vos',
    likes: ['Intriguing Cases', 'Violin'],
    number: '12345',
  },
  {
    firstName: 'Sherlock',
    lastName: 'Holmes',
    likes: ['Intriguing Cases', 'Violin'],
    number: '12345',
  },
  {
    firstName: 'Harry',
    lastName: 'Cain',
    likes: ['Intriguing Cases', 'Violin'],
    number: '12345',
  },
  {
    firstName: 'Akira',
    lastName: 'Cain',
    likes: ['Intriguing Cases', 'Violin'],
    number: '12345',
  }];
  let x = 'No such contact';
  people.forEach((el) => {
    if (el.firstName === firstName) {
      if (el.hasOwnProperty(prop))x = el[prop];
      else x = 'No such property';
    }
  });
  return x;
}
