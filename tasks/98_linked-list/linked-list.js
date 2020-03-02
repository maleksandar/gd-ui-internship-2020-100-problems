class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.length) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;

      newNode.prev = this.tail;

      this.tail = newNode;
    }

    this.length += 1;

    return newNode;
  }

  pop() {
    if (!this.length) {
      return null;
    } else {
      const nodeToRemove = this.tail;

      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.tail = this.tail.prev;
        this.tail.next = null;
        nodeToRemove.prev = null;
      }

      this.length -= 1;

      return nodeToRemove;
    }
  }

  insertAfter(index, value) {
    if (index < 0 || index > this.length) {
      return null;
    } else if (index === 0) {
      return this.unshift(value);
    } else if (index === this.length) {
      return this.push(value);
    } else {
      const newNode = new Node(value);

      const newPrevNode = this.get(index - 1);
      const newNextNode = newPrevNode.next;

      newNode.prev = newPrevNode;
      newPrevNode.next = newNode;

      newNode.next = newNextNode;
      newNextNode.prev = newNode;

      this.length += 1;

      return newNode;
    }
  }

  removeItem(index) {
    if (!this.length || index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return this.shift();
    } else if (index === this.length - 1) {
      return this.pop();
    } else {
      const nodeToRemove = this.get(index);
      const prevNodeToRemove = nodeToRemove.prev;
      const nextNodeToRemove = nodeToRemove.next;

      nodeToRemove.prev = null;
      nodeToRemove.next = null;

      prevNodeToRemove.next = nextNodeToRemove;

      nextNodeToRemove.prev = prevNodeToRemove;

      this.length -= 1;

      return nodeToRemove;
    }
  }

  amount() {
    return this.length;
  }

  iterate(cb) {
    let current = this.head;
    while (current) {
      if (cb) {
        cb(current);
      }
      current = current.next;
    }
  }
}
