import Stack from './stack.js';

/**
 * creates a Queue
 * @see datastructures and algorithms in javascript, page 59, 72
 */
export default class Queue extends Stack {
  constructor() {
    super();
  }

  // behavior
  // CREATE
    enqueue = this.push;
  // READ
    get first () {
      this.front();
      return this.getCurrentElement();
    }

    get last () {
      this.end();
      return this.getCurrentElement();
    }
  // UPDATE
  // DELETE
    dequeue = (front = true) => {
      if (this.top) {
        if (front) this.front();
        else this.end();

        return this.pop();
      }

      return false;
    };
}
