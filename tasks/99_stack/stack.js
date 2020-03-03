/**
 * Class representing stack.
 */
export class Stack {
  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.first === null) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      newNode.prev = this.last;
    }

    this.last = newNode;
    this.size++;
  }


  pop() {
    if (this.last === null) {
      throw new Error('Stack is empty!');
    }

    const lastValue = this.last.value;

    if (this.last === this.first) {
      this.last = null;
      this.first = null;
    } else {
      this.last = this.last.prev;
      this.last.next = null;
    }

    this.size--;
    return lastValue;
  }

  isEmpty() {
    return (this.size === 0);
  }

  size() {
    return this.size;
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
