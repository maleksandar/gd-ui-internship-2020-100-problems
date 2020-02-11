// //Setup
var contacts = [
  {
      "firstName": "Akira",
      "lastName": "Laine",
      "number": "0543236543",
      "likes": ["Pizza", "Coding", "Brownie Points"]
  },
  {
      "firstName": "Harry",
      "lastName": "Potter",
      "number": "0994372684",
      "likes": ["Hogwarts", "Magic", "Hagrid"]
  },
  {
      "firstName": "Sherlock",
      "lastName": "Holmes",
      "number": "0487345643",
      "likes": ["Intriguing Cases", "Violin"]
  },
  {
      "firstName": "Kristian",
      "lastName": "Vos",
      "number": "unknown",
      "likes": ["Javascript", "Gaming", "Foxes"]
  }
];

export const lookupProfile = (firstName, prop) => {
let msg = 'No such contact';

for (let contact in contacts) {
  if (contacts[contact].firstName === firstName && contacts[contact].hasOwnProperty(prop)) {
    msg = contacts[contact][prop];
  }else if (!contacts[contact].hasOwnProperty(prop)) {
    msg = 'No such property';
  }
}

return msg;
}
