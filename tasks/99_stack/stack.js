export function Stack() {
  var items = [];

  this.push = function(el) {
    items.push(el);
  };
  this.pop = function() {
    if (items.length === 0) {
      return [];
    }
    return items.pop();
  };
  this.isEmpty = function() {
    return items.length === 0;
  };
  this.size = function() {
    return items.length;
  };
}
