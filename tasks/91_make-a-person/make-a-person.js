export var Person = function(firstAndLast) {
  var nameArray = firstAndLast.split(" ");

  this.getFullName = function() {
    return nameArray.join(" ");
  };
  this.getFirstName = function() {
    return nameArray[0];
  };
  this.getLastName = function() {
    return nameArray[1];
  };
  this.setFullName = function(firstAndLast) {
    nameArray = firstAndLast.split(" ");
  };
  this.setFirstName = function(first) {
    nameArray[0] = first;
  };
  this.setLastName = function(last) {
    nameArray[1] = last;
  };
};
