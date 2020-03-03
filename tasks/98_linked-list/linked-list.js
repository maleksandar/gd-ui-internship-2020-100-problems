export function LinkedList() {
  this.head = null;
  this.tail = null;
  this.amount = 0;

  this.push = function(value) {
    if (this.head === null) {
      this.head = new Node(value, null, null);
      this.tail = this.head;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = new Node(value, current, null);
      this.tail=current.next;
    }
    this.amount++;
  };

  this.iterate = function(cb) {
    let current = this.head;

    while (current) {
      cb(current);
      current = current.next;
    }
  };

  this.pop = function() {
    if (this.tail === null) {
      return null;
    }

    if (this.head === this.tail) {
      let deletedTail = this.tail;
      this.head = this.tail = null;
      this.amount--;
      return deletedTail;
    }

    let deletedTail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.amount--;
    return deletedTail;
  };

  this.insertAfter = function(whereToInsert, valueToInsert) {
    let current = this.head;

    while (current) {
      if (current.value === whereToInsert) {
        current.next = new Node(valueToInsert, current, current.next);
        this.amount++;
        return true;
      }

      current = current.next;
    }
    return false;
  };

  this.removeItem = function(item) {
    let current = this.head;

    while (current) {
      if (current.value === item) {
        current.prev.next = current.next;
        return true;
      }
      current = current.next;
    }
    this.amount--;
    return false;
  };
}

function Node(value, prev, next) {
  this.value = value;
  this.prev = prev;
  this.next = next;
}

