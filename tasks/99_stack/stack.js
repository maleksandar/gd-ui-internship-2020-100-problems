export class Stack {
  constructor() {
    this.top = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    // If there is no top yet let's make new node a top
    if (!this.top) {
      this.top = newNode;
      this.last = newNode;
      this.size++;
      return this;
    }

    // Attach new node to the end of linked list
    this.last.next = newNode;
    // Attach current last to the new node's previous reference
    newNode.prev = this.last;
    // Set new node to be the last of linked list
    this.last = newNode;
    this.size++;
    return this;
  }

  pop() {
    // No last to delete
    if (!this.last) {
      return null;
    }

    // There is only one node in linked list
    if (this.top === this.last) {
      const deletedLast = this.last;
      this.top = null;
      this.last = null;
      this.size--;
      return deletedLast.value;
    }

    // If there are many nodes in linked list
    const deletedLast = this.last;
    this.last = this.last.prev;
    this.last.next = null;
    this.size--;
    return deletedLast.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
