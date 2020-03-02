class Elem {
  constructor(valueInput, prevInput = null, nextInput= null) {
    this.value = valueInput;
    this.prev = prevInput;
    this.next = nextInput;
  }
}

export class LinkedList {
  constructor() {
    this.head = null; this.tail = null; this.amount = 0;
  }


  push(value) {
    if (!this.head) {
      this.head = this.tail = new Elem(value);
    } else {
      this.tail.next = new Elem(value, this.tail);
      this.tail = this.tail.next;
    }
    this.amount++;
  }

  pop() {
    if (this.head) {
      let elementToReturn =this.tail.value;
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
      this.amount--;
      return elementToReturn;
    }
    return null;
  }

  insertAfter(after, value) {
    let current = this.head;
    while (current && current.value !== after) {
      current = current.next;
    }
    if (current) {
      let nextElement = current.next;
      current.next = new Elem(value, current, nextElement);
      if (nextElement) {
        nextElement.prev = current.next;
      }
      if (current === this.tail) {
        this.tail = current.next;
      }
      this.amount++;
      return true;
    } else {
      return false;
    }
  }

  iterate(cb) {
    let current = this.head;
    while (current) {
      cb(current);
      current = current.next;
    }
  }

  removeItem(value) {
    let current = this.head;
    while (current && current.value !== value) {
      current = current.next;
    }
    if (current) {
      if (current.prev && current.next) {
        current.prev.next = current.next;
        current.next.prev = current.prev;
        current.next = current.prev = null;
      } else if (current.prev) {
        this.tail = current.prev;
        current.prev.next = null;
      } else if (current.next) {
        this.head = current.next;
        current.next.prev = null;
      }
      return true;
    }
  }
}
