export class Person {
  constructor(fullName) {
    let firstName = '';
    let lastName = '';
    if (typeof fullName === 'string') {
      [firstName, lastName] = fullName.split(' ');
    }
    this.getFirstName = function() {
      return firstName;
    };
    this.getLastName = function() {
      return lastName;
    };
    this.getFullName = function() {
      return firstName + ' ' + lastName;
    };
    this.setFirstName = function(first) {
      if (typeof first === 'string') {
        firstName = first;
      }
    };
    this.setLastName = function(last) {
      if (typeof last === 'string') {
        lastName = last;
      }
    };
    this.setFullName = function(fullName) {
      if (typeof fullName === 'string') {
        [firstName, lastName] = fullName.split(' ');
      }
    };
  }
}
