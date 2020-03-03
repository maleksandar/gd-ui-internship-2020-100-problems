export function Person(fullName) {
  let fullNameSplit = fullName.split(' ');

  this.getFirstName = function() {
    return fullNameSplit[0];
  };

  this.getLastName = function() {
    return fullNameSplit[1];
  };

  this.getFullName = function() {
    return fullNameSplit.join(' ');
  };

  this.setFirstName = function(firstName) {
    fullNameSplit[0] = firstName;
  };

  this.setLastName = function(lastName) {
    fullNameSplit[1] = lastName;
  };

  this.setFullName = function(fullName) {
    fullNameSplit = fullName.split(' ');
  };
}
