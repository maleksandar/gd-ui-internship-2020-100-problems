// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  if (this.length === 0) {
    return '';
  }

  let arr = this.trim().split(' ');

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
};
