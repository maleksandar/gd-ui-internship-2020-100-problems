// eslint-disable-next-line no-extend-native
String.prototype.camelCase = function() {
  let words = this.split(' ');
  let capitalizedWords = words.map((word) => {
    return capitalizeWord(word);
  });
  return capitalizedWords.join('');

  function capitalizeWord(word) {
    return word[0].toUpperCase() + word.slice(1);
  }
};

