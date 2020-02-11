export const lookupProfile = (firstName, prop) => {
  const contacts = [
    {firstName: 'Kristian', lastName: 'Vos'},
    {firstName: 'Sherlock', likes: ['Intriguing Cases', 'Violin']},
    {firstName: 'Harry', likes: []},
    {firstName: 'Akira'},
  ];

  let propFound = false;
  let contactFound = false;

  for (let contact of contacts) {
    if (prop in contact) {
      propFound = true;
    }

    if (contact.firstName === firstName) {
      contactFound = true;
    }

    if (propFound && contactFound) {
      return contact[prop];
    }
  }

  if (!contactFound) {
    return 'No such contact';
  } else if (!propFound) {
    return 'No such property';
  }
};
