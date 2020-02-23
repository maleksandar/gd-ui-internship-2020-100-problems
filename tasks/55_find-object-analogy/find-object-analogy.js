export const whatIsInAName = (collection, source) => {
  var arr = [];
  var keys = Object.keys(source);
  arr = collection.filter(obj => {
    return keys.every(key => {
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
};
