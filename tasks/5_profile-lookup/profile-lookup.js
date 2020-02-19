export const lookupProfile = (firstName, prop) => {
  const contacts = [
    {firstName: 'Kristian', lastName: 'Vos'},
    {firstName: 'Sherlock', likes: ['Intriguing Cases', 'Violin']},
    {firstName: 'Harry', likes: []},
    {firstName: 'Akira'},
  ];

  for (let contact of contacts) {
    if (contact.firstName === firstName) {
      if (prop in contact) {
        return contact[prop];
      } else {
        return 'No such property';
      }
    }
  }

  return 'No such contact';
};
