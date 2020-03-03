/**
 * Class representing double linked list.
 */
export class LinkedList {
  constructor() {
    this.amount = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
    }

    this.tail = newNode;
    this.amount++;
  }


  pop() {
    if (this.tail === null) {
      throw new Error('List is empty!');
    }

    const lastValue = this.tail.value;

    if (this.tail === this.head) {
      this.tail = null;
      this.head = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.amount--;
    return lastValue;
  }

  iterate(fn) {
    let currentNode = this.head;

    while (currentNode !== null) {
      fn(currentNode);
      currentNode = currentNode.next;
    }
  }

  insertAfter(afterValue, insertValue) {
    let currentNode = this.head;

    while (currentNode && currentNode.value !== afterValue) {
      currentNode = currentNode.next;
    }

    if (currentNode) {
      if (currentNode.next) {
        const newNode = new Node(insertValue);
        currentNode.next.prev = newNode;
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        newNode.prev = currentNode;
      } else {
        const newNode = new Node(insertValue);
        currentNode.next = newNode;
        newNode.prev = currentNode;
      }
      this.amount++;
    }
  }

  removeItem(value) {
    let currentNode = this.head;

    while (currentNode && currentNode.value !== value) {
      currentNode = currentNode.next;
    }

    if (currentNode) {
      if (currentNode.prev && currentNode.next) {
        currentNode.prev.next = currentNode.next;
        currentNode.next.prev = currentNode.prev;
      } else if (currentNode.prev) {
        this.tail = currentNode.prev;
        currentNode.prev.next = null;
      } else if (currentNode.next) {
        this.head = currentNode.next;
        currentNode.next.prev = null;
      }
      this.amount--;
    } else {
      throw new Error(`Element ${value} isn't in the list!`);
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}
