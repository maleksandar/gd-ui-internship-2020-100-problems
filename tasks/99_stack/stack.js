export function Stack() {
  this.size = 0;
  this.first = null;
  this.last = null;

  this.push = function(value) {
    if (this.first === null) {
      this.first = new Node(value, null, null);
      this.last = this.first;
    } else {
      let current = this.first;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value, current, null);
      this.last = current.next;
    }
    this.size++;
  };

  this.pop = function() {
    if (this.last === null) {
      return null;
    }

    if (this.first === this.last) {
      let deletedLast = this.last;
      this.first = this.last = null;
      this.size--;

      return deletedLast.value;
    }

    let deletedLast = this.last;
    this.last = this.last.prev;
    this.last.next = null;
    this.size--;

    return deletedLast.value;
  };

  this.isEmpty = function() {
    return this.size===0;
  };
}

function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}
