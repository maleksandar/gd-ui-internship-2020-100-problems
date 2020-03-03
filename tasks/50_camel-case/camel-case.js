/* eslint-disable no-extend-native */
String.prototype.camelCase = function() {
  return this.split(' ').map((el) => {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  }).join('');
};
