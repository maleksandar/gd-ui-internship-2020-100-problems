export class Stack {
  constructor() {
    this.size = 0;
    this.head = null;
    this.last = null;
  }

  push(value) {
    if (this.head === null) {
      this.head = new Node(null, null, value);
      this.last = this.head;
    } else {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = new Node(pointer, null, value);
      this.last = pointer.next;
    }
    this.size++;
  }
  pop() {
    if (this.last) {
      const removeValue = this.last.value;
      this.last = this.last.prev;
      if (this.last) {
        this.last.next = null;
      }
      this.amount--;
      return removeValue;
    }
  }

  isEmpty() {
    return this.size === 0;
  }
}
class Node {
  constructor(prev, next, value) {
    this.prev = prev;
    this.next = next;
    this.value = value;
  }
}

