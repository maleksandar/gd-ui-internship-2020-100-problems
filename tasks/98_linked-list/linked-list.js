export class LinkedList {
  constructor() {
    this.amount = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    if (this.head === null) {
      this.head = new Node(null, null, value);
      this.tail = this.head;
    } else {
      let pointer = this.head;
      while (pointer.next) {
        pointer = pointer.next;
      }
      pointer.next = new Node(pointer, null, value);
      this.tail = pointer.next;
    }
    this.amount++;
  }
  pop() {
    if (this.tail) {
      this.tail = this.tail.prev;
      if (this.tail) {
        this.tail.next = null;
      }
      this.amount--;
    }
  }
  iterate(callback) {
    let pointer = this.head;
    while (pointer) {
      callback(pointer);
      pointer = pointer.next;
    }
  }
  insertAfter(targetValue, value) {
    let pointer = this.head;
    while (pointer != null) {
      if (pointer.value === targetValue) {
        pointer.next = new Node(pointer, pointer.next, value);
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }
  removeItem(targetValue) {
    let pointer = this.head;
    while (pointer != null) {
      if (pointer.value === targetValue) {
        pointer.prev.next = pointer.next;
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }
}
class Node {
  constructor(prev, next, value) {
    this.prev = prev;
    this.next = next;
    this.value = value;
  }
}

