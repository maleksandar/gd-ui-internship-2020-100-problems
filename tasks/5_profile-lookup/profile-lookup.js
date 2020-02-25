
const array = [

  {firstName: 'Kristian', lastName: 'Vos'},
  {firstName: 'Sherlock', likes: ['Intriguing Cases', 'Violin']},
  {firstName: 'Harry', likes: ['Intriguing Cases', 'Violin']},
  {firstName: 'Akira', lala: 'a'},

];

export function lookupProfile(firstName, prop) {
  let filtered = array.filter((contact) => (contact.firstName === firstName
  ));

  if (filtered.length === 0) return 'No such contact';

  filtered = filtered.filter((contact) => (contact.hasOwnProperty(prop)));

  if (filtered.length === 0) return 'No such property';

  return (filtered[0])[prop];
}
