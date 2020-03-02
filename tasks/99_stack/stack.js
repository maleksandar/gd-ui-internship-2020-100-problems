import {LinkedList} from '../98_linked-list/linked-list';


export class Stack {
  constructor() {
    this.stack = new LinkedList();
    this.last = this.stack.tail;
    this.size = this.stack.amount;
  }

  push(value) {
    this.stack.push(value);
    this.size = this.stack.amount;
    this.last = this.stack.tail;
  }

  pop() {
    let returnValue = this.stack.pop();
    this.size = this.stack.amount;
    this.last = this.stack.tail;
    return returnValue;
  }

  isEmpty() {
    return this.size === 0;
  }

  size() {
    return this.size;
  }
}
