

// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  let wordsArray = this.split(' ');

  return wordsArray.map((word) => {
    return word[0].toUpperCase() + word.slice(1);
  }).join('');
};
