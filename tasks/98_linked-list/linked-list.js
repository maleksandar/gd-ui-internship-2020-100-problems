export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.amount = 0;
  }

  push(value) {
    const newNode = new Node(value);

    // If there is no head yet let's make new node a head
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.amount++;
      return this;
    }

    // Attach new node to the end of linked list
    this.tail.next = newNode;
    // Attach current tail to the new node's previous reference
    newNode.prev = this.tail;
    // Set new node to be the tail of linked list
    this.tail = newNode;
    this.amount++;
    return this;
  }

  pop() {
    // No tail to delete
    if (!this.tail) {
      return null;
    }

    // There is only one node in linked list
    if (this.head === this.tail) {
      const deletedTail = this.tail;
      this.head = null;
      this.tail = null;
      this.amount--;
      return deletedTail;
    }

    // If there are many nodes in linked list
    const deletedTail = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    this.amount--;
    return deletedTail;
  }

  iterate(func) {
    let currentNode = this.head;

    while (currentNode) {
      func(currentNode);
      currentNode = currentNode.next;
    }
  }

  insertAfter(currNode, value) {
    if (currNode) {
      return false;
    }

    const newNode = new Node(value);
    newNode.next = currNode.next;
    currNode.next = newNode;
    newNode.prev = currNode;

    if (newNode.next != null) {
      newNode.next.prev = newNode;
    }

    this.amount++;
    return true;
  }

  removeItem(value) {
    if (!this.head) {
      return null;
    }

    let deletedNode = null;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.value === value) {
        deletedNode = currentNode;

        if (deletedNode === this.head) {
          // If head is going to be deleted
          // Set head to second node, which will become new head
          this.head = deletedNode.next;

          // Set new head's previous to null
          if (this.head) {
            this.head.previous = null;
          }

          // If all the nodes in list has same value that is passed
          // as argument then all nodes will get deleted, therefore
          // tail needs to be updated
          if (deletedNode === this.tail) {
            this.tail = null;
          }
        } else if (deletedNode === this.tail) {
          // If tail is going to be deleted
          // Set tail to second last node, which will become new tail
          this.tail = deletedNode.prev;
          this.tail.next = null;
        } else {
          // If middle node is going to be deleted
          const previousNode = deletedNode.prev;
          const nextNode = deletedNode.next;
          previousNode.next = nextNode;
          nextNode.previous = previousNode;
        }
      }

      currentNode = currentNode.next;
    }

    this.amount--;
    return deletedNode;
  }
}

class Node {
  constructor(value, prev = null, next = null) {
    this.value = value;
    this.prev = prev;
    this.next = next;
  }
}
