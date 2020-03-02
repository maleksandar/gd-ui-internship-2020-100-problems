export class Person {
  constructor(fullName) {
    const fullNameSplit = fullName.split(' ');
    let firstName = fullNameSplit[0];
    let lastName = fullNameSplit[1];

    this.getFirstName = function() {
      return firstName;
    };

    this.setFirstName = function(firstNameInput) {
      firstName = firstNameInput;
    };

    this.getLastName = function() {
      return lastName;
    };

    this.setLastName = function(lastNameInput) {
      lastName = lastNameInput;
    };

    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };

    this.setFullName = function(fullNameInput) {
      const fullNameSplit = fullNameInput.split(' ');
      firstName = fullNameSplit[0];
      lastName = fullNameSplit[1];
    };
  }
}

