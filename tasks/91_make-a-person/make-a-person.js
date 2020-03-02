export const Person = function(name) {
  let fullName = name.split(' ');
  let firstName = fullName[0];
  let lastName = fullName[1];

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
    firstName = first;
  };

  this.setLastName = function(last) {
    lastName = last;
  };

  this.setFullName = function(firstAndLast) {
    fullName = firstAndLast.split(' ');
    firstName = fullName[0];
    lastName = fullName[1];
  };
};

// Alternative solution using class
export class Person2 {
  constructor(name) {
    this._fullName = name.split(' ');
    this._firstName = this._fullName[0];
    this._lastName = this._fullName[1];
  }

  getFirstName() {
    return this._firstName;
  }

  getLastName() {
    return this._lastName;
  }

  getFullName() {
    return this._firstName + ' ' + this._lastName;
  }

  setFirstName(first) {
    this._firstName = first;
  }

  setLastName(last) {
    this._lastName = last;
  }

  setFullName(firstAndLast) {
    this._fullName = firstAndLast.split(' ');
    this._firstName = this._fullName[0];
    this._lastName = this._fullName[1];
  }
}
