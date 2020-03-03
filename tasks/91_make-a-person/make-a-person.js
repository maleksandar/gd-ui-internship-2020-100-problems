/**
 * Class representing person.
 */
export class Person {
  constructor(fullName) {
    [this._firstName, this._lastName] = fullName.split(' ');
  }

  getFullName() {
    return `${this._firstName} ${this._lastName}`;
  }

  setFullName(fullName) {
    [this._firstName, this._lastName] = fullName.split(' ');
  }

  getFirstName() {
    return this._firstName;
  }

  setFirstName(firstName) {
    this._firstName = firstName;
  }

  getLastName() {
    return this._lastName;
  }

  setLastName(lastName) {
    this._lastName = lastName;
  }
}
